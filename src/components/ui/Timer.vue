<template>
    <div class="box">
        <div class="columns is-mobile is-vcentered" >
            <div class="column is-narrow">
                <div class="clock box has-text-centered" @click="toggleClock">
                    <span class="time">{{ leadingZero(hour) }}</span>
                    <span class="clock-separator">:</span>
                    <span class="time">{{ leadingZero(minute) }}</span>
                    <span class="clock-separator">:</span>
                    <span class="time">{{ leadingZero(second) }}</span>
                </div>
            </div>
            <div class="column">
                <div class="timer-logs box">
                    <div v-for="log in timerLogs">
                        <span class="log start">Timer started at {{ formatLog(log.created_at) }}</span>
                        <span class="log stop">Timer stoped at {{ formatLog(log.finished_at) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackendService from '@/services/backend-service'
import * as bulmaToast from 'bulma-toast'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


export default {
    data() {
        return {
            hour: 0,
            minute: 0,
            second: 0,
            interval: null,
            timerLogs: []
        }
    },
    methods: {
        toggleClock() {
            if(this.interval === null) {
                this.interval = setInterval(() => this.tick(), 1000)
                this.startTimer()
            } else {
                clearInterval(this.interval)
                this.interval = null
                this.clearTimer()
                this.stopTimer()
            }
        },
        tick() {
            this.second++;
            if(this.second > 59) {
                this.minute++
                this.second = 0
                if(this.minute > 59) {
                    this.hour++
                    this.minute = 0
                }
            }
        },
        clearTimer() {
            this.hour = 0
            this.minute = 0
            this.second = 0
        },
        leadingZero(number) {
            return (number < 10) ? `0${number}` : number
        },
        startTimer() {
            let backend = new BackendService();
            //Attach path about to be watched to timer creation
            // this.currentTimer.path = this.pathToWatch;
            backend.storeTimer(this.$store.state.api, this.$store.state.selectedGroupId, this.$store.state.selectedTaskId)
            .then((response) => {
                this.$store.commit('currentTimer', response.data.timer)
                // console.log('start timer'+this.currentTimer);
                bulmaToast.toast({
                    message: "Timer started",
                    type: "is-success",
                    dismissible: true,
                    position: 'top-right',
                    animate: { in: "fadeIn", out: "fadeOut" }
                });
                // console.log('start toast should be displayed')
            }, (error) => {
                console.log(error)
                //reset path to watch attached to timer upon timer creation failure
                // this.currentTimer.path = "";
                // this.currentTimer.timer = {};
            })
        },
        stopTimer() {
            let backend = new BackendService();
            //reset path beeing watched
            // this.currentTimer.path = "";
            backend.updateTimer(this.$store.state.api, this.$store.state.selectedGroupId, this.$store.state.selectedTaskId, this.$store.state.currentTimer.id)
            .then((response) => {
                //Also in the view
                // this.pathToWatch = "";
                this.timerLogs.push(this.$store.state.currentTimer) //push to logs
                this.$store.commit('currentTimer', null)
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
        formatLog(log) {
            return formatDistanceToNow(new Date(log));
        }
    }
};
</script>

<style scoped>
    .time {
        font-size: 2rem;
        letter-spacing: .1rem;
        font-weight: bold;
    }
    .clock-separator {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 0 3px;
    }
    .clock {
        cursor: pointer;
    }
    .timer-logs {
        min-height: 200px;
        max-height: 200px;
        overflow: scroll;
    }
    .log.start {
        background-color: #5cc9f5;
        display: block;
    }
    .log.stop {
        background-color: #f58f00;
        display: block;
    }
</style>
