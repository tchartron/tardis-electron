<template>
    <div class="container">
        <div class="columns is-vcentered  has-text-centered">
            <div class="column">
                <div class="logo">
                    <img alt="web-logo" src="./../assets/logo-web-white.png">
                </div>
            </div>
            <div class="column">
                <div class="box is-unselectable has-text-left has-margin-left-20 has-margin-right-30">
                    <span class="underline">User informations</span>
                    <span class="is-block is-size-7">id : {{ user.id }}</span>
                    <span class="is-block is-size-7">name : {{ user.name }}</span>
                    <span class="is-block is-size-7">email : {{ user.email }}</span>
                </div>
            </div>
        </div>
        <div class="box has-margin-right-10 has-margin-left-10">
            <div class="columns is-mobile">
                <div class="column is-two-thirds">
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label">Group : </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-fullwidth is-medium">
                                        <select name="groups" @change="findTasks()" v-model="selectedGroup">
                                            <option value="0">Please pick a group</option>
                                            <option v-for="group in groups" :value="group.id">{{ group.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label">Task : </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-fullwidth is-medium">
                                        <select name="tasks" @change="getTaskDetails(true)" v-model="selectedTask" :disabled="(selectedGroup === 0)">
                                            <option value="0">Pick a task</option>
                                            <option v-for="task in tasks" :value="task.id">{{ task.title }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box" v-show="showTaskDetails">
                        <div class="notification">
                          <button class="delete" @click="hideDetails"></button>
                          <p class="underline">Task Details :</p>
                          <p>Id : {{ taskDetails.id }}</p>
                          <p>Company Id : {{ taskDetails.company_id }}</p>
                          <p>Title : {{ taskDetails.title }}</p>
                          <p>Description : {{ taskDetails.description }}</p>
                          <p>Completed : {{ (taskDetails.completed) ? 'Yes' : 'No' }}</p>
                          <p>Created : {{ taskDetails.created_at }}</p>
                          <p>Updated : {{ taskDetails.updated_at }}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box" v-if="taskSummary != null">
                        <p class="underline">Task summary :</p>
                        <p class="">Total time spent <span class="bold">{{ taskSummary.totalTime }}</span></p>
                        <p class="">Your time spent<span class="bold"> {{ taskSummary.userTime }}</span></p>
                        <p class="">Total timers <span class="bold">{{ taskSummary.timersNumber }}</span></p>
                        <button class="button is-warning is-small has-margin-top-10" @click="getTaskDetails(false)">
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-medium is-rounded" type="text" placeholder="/path/to/watch" v-model="pathToWatch" :disabled="(selectedTask === 0)">
                <span class="icon is-left">
                    <i class="fas fa-folder-open"></i>
                </span>
            </div>
            <div class="field">
                <p class="control has-text-centered has-margin-top-20">
                    <button class="button is-dark is-medium has-margin-right-10" @click="watch" v-show="!isWatching">
                        Start watching
                    </button>
                    <button class="button is-dark is-medium has-margin-left-10" @click="stopWatch" v-show="isWatching">
                        Stop watching
                    </button>
                </p>
                <p>Idle Time</p>
                <progress class="progress is-medium has-margin-top-20" :value="idleTime" max="30"></progress>
            </div>
            <div class="box watcher-output" v-if="watcherData.length > 0">
                <div class="notification is-warning" v-for="data in watcherData">
                    <span style="display: block;">Event : {{ data.event }}</span>
                    <span style="display: block;">Path : {{ data.path }}</span>
                </div>
            </div>
            <div class="pageloader is-dark" v-bind:class="{'is-active': isLoading}"><span class="title">{{ loadingMessage }}</span></div>
        </div>
        <div class="box is-unselectable has-text-left has-margin-left-50 has-margin-right-50">
            <span class="underline is-block has-text-centered">API informations</span>
            <span class="is-block is-size-7">Token : {{ api.access_token }}</span>
            <span class="is-block is-size-7">Expiration : {{ api.expires_in }}</span>
            <span class="is-block is-size-7">Type : {{ api.token_type }}</span>
        </div>
    </div>
</template>

<script>
// import BackendService from './../services/backend-service'
// const chokidar = require('chokidar');
// import chokidar from 'chokidar'
    // const ipc = require('electron').ipcRenderer
import BackendService from './../services/backend-service'
const differenceInSeconds = require('date-fns/difference_in_seconds')
import * as bulmaToast from "bulma-toast";

const MAX_IDLE_TIME = 30;

export default {
    name: 'Watch',
    props: ['user', 'api'],
    data() {
        return {
            // user: Object,
            // api: Object,
            pathToWatch: '',
            watcherData: [],
            isLoading: true, //default to true
            groups: Array,
            selectedGroup: 0,
            tasks: Array,
            selectedTask: 0,
            taskDetails: '',
            showTaskDetails: false,
            loadingMessage: String,
            isWatching: false,
            taskSummary: null,
            currentTimer: {
                path: '',
                timer: {}
            },
            idleInterval: false,
            idleTime: 0
        }
    },
    methods: {
        hideDetails() {
            this.showTaskDetails = false;
        },
        watch() {
            this.isWatching = !this.isWatching;
            this.$electron.ipcRenderer.send('ping', this.pathToWatch)
            this.countIdle();
            // console.log(`${this.pathToWatch} sent from component`)
        },
        stopWatch() {
            this.isWatching = !this.isWatching;
            this.$electron.ipcRenderer.send('stop')
            // this.pathToWatch = "";
            this.clearIdleInterval(true);
            // console.log('stop sent')
        },
        findGroups() {
            this.isLoading = true
            this.loadingMessage = "Loading groups ...";
            let backend = new BackendService();
            backend.getGroups(this.api.access_token)
            .then((response) => {
                // console.log(response)
                this.groups = response.data
                this.isLoading = false
            }, (error) => {
                console.log(error)
                this.isLoading = false;
            });
        },
        findTasks() {
            this.isLoading = true
            this.loadingMessage = "Loading Tasks ...";
            let backend = new BackendService();
            backend.getTasks(this.api.access_token, this.selectedGroup)
            .then((response) => {
                this.tasks = response.data
                this.isLoading = false
            }, (error) => {
                console.log(error)
                this.isLoading = false;
            });
        },
        getTaskDetails(details) {
            this.isLoading = true
            this.loadingMessage = "Getting task details ...";
            let backend = new BackendService();
            backend.getTask(this.api.access_token, this.selectedGroup, this.selectedTask)
            .then((response) => {
                this.taskDetails = response.data
                // this.isLoading = false;
                this.taskStatistics();
                if(details !== false) {
                    this.showTaskDetails = true;
                }
            }, (error) => {
                console.log(error)
                this.isLoading = false;
            })
        },
        taskStatistics() {
            this.loadingMessage = "Fetching task and user stats ...";
            if(this.isLoading !== true) {
                this.isLoading = true;
            }
            let totalTime = 0
            let userTime = 0
            if(this.taskDetails.timers.length > 0) {
                this.taskDetails.timers.map((timer) => {
                    let finishedAt = new Date(timer.finished_at)
                    let createdAt = new Date(timer.created_at)
                    totalTime += differenceInSeconds(finishedAt, createdAt)
                    if(timer.user_id == this.user.id) {
                        userTime += differenceInSeconds(finishedAt, createdAt)
                    }
                })
                this.taskSummary = {
                    "totalTime": this.toTimeString(totalTime),
                    "userTime": this.toTimeString(userTime),
                    "timersNumber": this.taskDetails.timers.length
                }
            }
            this.isLoading = false
            return this.taskSummary;
        },
        toTimeString(secondsTotal) {
            let sec_num = parseInt(secondsTotal, 10); // don't forget the second param
            let hours   = Math.floor(sec_num / 3600);
            let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            let seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours < 10) {hours = "0" + hours;}
            if (minutes < 10) {minutes = "0" + minutes;}
            if (seconds < 10) {seconds = "0" + seconds;}
            return hours + 'h' + minutes + 'm' + seconds;
        },
        startTimer() {
            let backend = new BackendService();
            //Attach path about to be watched to timer creation
            this.currentTimer.path = this.pathToWatch;
            backend.storeTimer(this.api.access_token, this.selectedGroup, this.selectedTask)
            .then((response) => {
                this.currentTimer.timer = response.data.timer;
                // console.log('start timer'+this.currentTimer);
                bulmaToast.toast({
                    message: "Timer started go to work",
                    type: "is-success",
                    dismissible: true,
                    position: 'top-right',
                    animate: { in: "fadeIn", out: "fadeOut" }
                });
                // console.log('start toast should be displayed')
            }, (error) => {
                console.log(error)
                //reset path to watch attached to timer upon timer creation failure
                this.currentTimer.path = "";
                this.currentTimer.timer = {};
            })
        },
        stopTimer() {
            let backend = new BackendService();
            //reset path beeing watched
            // this.currentTimer.path = "";
            backend.updateTimer(this.api.access_token, this.selectedGroup, this.selectedTask, this.currentTimer.timer.id)
            .then((response) => {
                //Also in the view
                // this.pathToWatch = "";
                this.currentTimer.timer = null;
                // console.log('stop timer'+this.currentTimer)
                bulmaToast.toast({
                    message: "Timer stoped go to rest",
                    type: "is-warning",
                    dismissible: true,
                    animate: { in: "fadeIn", out: "fadeOut" }
                });
                // console.log('stop toast should be displayed')
            }, (error) => {
                console.log(error)
                //cancel what has been done before send request because request failed and so
                // this.currentTimer.path = this.pathToWatch;

                //Recursive call to stopTimer() to make this timer stop .... ?
            })
        },
        countIdle() {
            this.idleInterval = setInterval(() => {
                this.idleTime++;
                if(this.idleTime > MAX_IDLE_TIME) {
                    this.clearIdleInterval(false);
                }
            }, 1000)
        },
        clearIdleInterval(stopped) {
            if(this.idleInterval) {
                clearInterval(this.idleInterval);
                this.idleTime = 0;
                this.idleInterval = false;
            }
            if(stopped === true) {
                //Reset both path to watch and path beeing watched
                this.pathToWatch = "";
                this.currentTimer.path = "";
            } else {
                //not explicitly stopped we just have oveflowed idleTime just stop timer keep on watching
                this.currentTimer.path = "";
            }
            if(this.currentTimer.timer != null) { //check if timer object exists
                this.stopTimer();
            }
        }
    },
    mounted() {
        this.$electron.ipcRenderer.on('pong', (event, data) => {
            this.watcherData.push(data)
            //reset idleTime something just happened
            this.idleTime = 0;

            //If timer already attached to path do nothing
            if(this.currentTimer.path !== this.pathToWatch) {
                this.startTimer();
                if(!this.idleInterval) {
                    this.countIdle();
                }
            }

        });
        //Populates the groups select
        this.findGroups();
    }
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.watcher-output {
    max-height: 400px;
    overflow: auto;
    overflow-wrap: break-word;
}
.logo > img {
    /*text-align: center;*/
    max-height: 100px;
}
.underline {
    text-decoration: underline;
}
.bold {
    font-weight: bold;
}
.box span {
    overflow-wrap: break-word;
}
</style>
