<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label">Task : </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth">
                        <select name="tasks" v-model="selectedTaskId" :disabled="(selectedGroupId === 0)">
                            <option value="0">Pick a task</option>
                            <option v-for="task in tasks" :value="task.id">{{ task.title }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <a class="button is-info" @click="getTaskDetails">Details</a>
        </div>
        <div class="modal" :class="{'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box is-clipped" v-if="taskSummary != null">
                    <p class="underline">Task summary :</p>
                    <p class="">Total time spent <span class="bold">{{ taskSummary.totalTime }}</span></p>
                    <p class="">Your time spent<span class="bold"> {{ taskSummary.userTime }}</span></p>
                    <p class="">Total timers <span class="bold">{{ taskSummary.timersNumber }}</span></p>
                    <p class="">Title <span class="bold">{{ taskDetail.title }}</span></p>
                    <p class="">Description <span class="bold">{{ taskDetail.description }}</span></p>
                    <button class="button is-warning is-small has-margin-top-10" @click="getTaskDetails">
                        Refresh
                    </button>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
        </div>
    </div>
</template>

<script>
import BackendService from '@/services/backend-service'
const differenceInSeconds = require('date-fns/difference_in_seconds')

export default {
    name: 'Task',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        getTaskDetails() {
            this.$store.commit('isLoading', true)
            this.$store.commit('loadingMessage', "Getting task details ...")
            let backend = new BackendService();
            console.log(this.$store.state.details.id)
            console.log(this.$store.state.selectedTaskId)
            // if((typeof this.$store.state.details === 'undefined') || (this.$store.state.details.id !== this.$store.state.selectedTaskId)) {
                backend.getTask(this.$store.state.api, this.$store.state.selectedGroupId, this.$store.state.selectedTaskId)
                .then((response) => {
                    this.$store.commit('taskdetails', response.data)
                    // this.isLoading = false;
                    this.taskDetails()
                }, (error) => {
                    // console.log(error)
                    // this.$store.commit('isLoading', false)
                })
            // } else {
            //     this.taskDetails();
            // }
        },
        taskDetails() {
            this.isActive = true
            console.log(this.isActive)
            // this.loadingMessage = "Fetching task and user stats ...";
            this.$store.commit('loadingMessage', "Calculating task and user stats ...")
            if(this.$store.state.isLoading !== true) {
                this.$store.commit('isLoading', true)
            }
            let totalTime = 0
            let userTime = 0
            if(this.$store.state.details.timers.length > 0) {
                this.$store.state.details.timers.map((timer) => {
                    let finishedAt = new Date(timer.finished_at)
                    let createdAt = new Date(timer.created_at)
                    totalTime += differenceInSeconds(finishedAt, createdAt)
                    if(timer.user_id == this.$store.state.user.id) {
                        userTime += differenceInSeconds(finishedAt, createdAt)
                    }
                })
                console.log(totalTime)
                this.taskSummary = {
                    "totalTime": this.toTimeString(totalTime),
                    "userTime": this.toTimeString(userTime),
                    "timersNumber": this.$store.state.details.timers.length
                }
            }
            this.$store.commit('isLoading', false)
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
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        },
        selectedTaskId: {
            get() {
                return this.$store.state.selectedTaskId
            },
            set(value) {
                this.$store.commit('selectedTaskId', value)
            }
        },
        selectedGroupId() {
            return this.$store.state.selectedGroupId
        },
        taskSummary: {
            get() {
                return this.$store.state.taskSummary
            },
            set(summary) {
                this.$store.commit('setTaskSummary', summary)
            }
        },
        taskDetail() {
            return this.$store.state.details
        }
    }
};
</script>
