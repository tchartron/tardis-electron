<template>
    <div>
        <a class="button is-info" @click="getTask">Time summary</a>
        <div class="modal" :class="{'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box is-clipped" v-if="taskTimeSummary != null">
                    <p class="underline">Task summary :</p>
                    <p class=""><span class="bold">Total time : </span><span class="bold">{{ timeSummary.totalTime }}</span></p>
                    <p class=""><span class="bold">Your time : </span><span class="bold"> {{ timeSummary.userTime }}</span></p>
                    <p class=""><span class="bold">Total timers : </span><span class="bold">{{ timeSummary.timersNumber }}</span></p>
                    <button class="button is-warning is-small has-margin-top-10" @click="getTask">
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
    name: 'TimeSummary',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        getTask() {
            this.$store.commit('isLoading', true)
            this.$store.commit('loadingMessage', "Getting task details ...")
            let backend = new BackendService();
                backend.getTask(this.$store.state.api, this.$store.state.selectedGroupId, this.$store.state.selectedTaskId)
                .then((response) => {
                    this.$store.commit('task', response.data)
                    // this.isLoading = false;
                    this.$store.commit('isLoading', false)
                    this.timeSummary()
                }, (error) => {
                    // console.log(error)
                    this.$store.commit('isLoading', false)
                })
        },
        timeSummary() {
            this.isActive = true
            // this.loadingMessage = "Fetching task and user stats ...";
            this.$store.commit('loadingMessage', "Calculating task and user stats ...")
            if(this.$store.state.isLoading !== true) {
                this.$store.commit('isLoading', true)
            }
            let totalTime = 0
            let userTime = 0
            if(this.$store.state.task.timers.length > 0) {
                this.$store.state.task.timers.map((timer) => {
                    let finishedAt = new Date(timer.finished_at)
                    let createdAt = new Date(timer.created_at)
                    totalTime += differenceInSeconds(finishedAt, createdAt)
                    if(timer.user_id == this.$store.state.user.id) {
                        userTime += differenceInSeconds(finishedAt, createdAt)
                    }
                })
                // console.log(totalTime)
                this.timeSummary = {
                    "totalTime": this.toTimeString(totalTime),
                    "userTime": this.toTimeString(userTime),
                    "timersNumber": this.$store.state.task.timers.length
                }
            }
            this.$store.commit('isLoading', false)
            return this.timeSummary;
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
        task() {
            return this.$store.state.task
        },
        taskTimeSummary: {
            get() {
                return this.$store.state.taskTimeSummary
            },
            set(summary) {
                this.$store.commit('setTaskTimeSummary', summary)
            }
        }
    }
};
</script>

<style scoped>
.underline {
    text-decoration: underline;
}
.bold {
    font-weight: bold;
}
</style>
