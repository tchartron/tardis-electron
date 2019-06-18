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
        <div class="box">
            <div class="columns is-mobile">
                <div class="column is-two-thirds">
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label">Group : </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-fullwidth">
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
                                    <div class="select is-fullwidth">
                                        <select name="tasks" @change="getTaskDetails" v-model="selectedTask">
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
                    <div class="box" v-if="taskDetails != ''">
                        <p class="underline">Task summary :</p>
                    </div>
                </div>
            </div>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-medium is-rounded" type="text" placeholder="/path/to/watch" v-model="pathToWatch">
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
            isWatching: false
        }
    },
    methods: {
        hideDetails() {
            this.showTaskDetails = false;
        },
        watch() {
            this.isWatching = !this.isWatching;
            this.$electron.ipcRenderer.send('ping', this.pathToWatch)
            // console.log(`${this.pathToWatch} sent from component`)
        },
        stopWatch() {
            this.isWatching = !this.isWatching;
            this.$electron.ipcRenderer.send('stop')
            // console.log('stop sent')
        },
        findGroups() {
            this.isLoading = true
            this.loadingMessage = "Loading groups ...";
            let backend = new BackendService();
            backend.getGroups(this.api.access_token)
            .then((response) => {
                console.log(response)
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
        getTaskDetails() {
            this.isLoading = true
            this.loadingMessage = "Getting task details ...";
            let backend = new BackendService();
            backend.getTask(this.api.access_token, this.selectedGroup, this.selectedTask)
            .then((response) => {
                console.log(response.data[0])
                this.taskDetails = response.data[0]
                // this.isLoading = false;
                this.getTaskTimers();
                this.showTaskDetails = true;
            }, (error) => {
                console.log(error)
                this.isLoading = false;
            })
        },
        getTaskTimers() {
            this.isLoading = true
            this.loadingMessage = "Fetching task and user stats ..."
            let backend = new BackendService();
            backend.getTaskTimers(this.api.access_token, this.selectedGroup, this.selectedTask)
            .then((response) => {
                console.log(response.data)
                this.isLoading = false
            }, (error) => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.$electron.ipcRenderer.on('pong', (event, data) => {
            this.watcherData.push(data)
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
