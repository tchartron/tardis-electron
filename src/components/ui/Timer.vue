<template>
    <div class="box">
        <div class="columns is-mobile is-vcentered" >
            <div class="column is-narrow">
                <div class="clock box has-text-centered" :class="{'bg-green' : !isClockTicking, 'bg-red' : isClockTicking}" @click="toggleClock">
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
                        <span class="log stop">Timer stopped at {{ formatLog(log.finished_at) }}</span>
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
            timerLogs: [],
        }
    },
    methods: {
        toggleClock() {
            if(parseInt(this.selectedGroupId) !== 0 && parseInt(this.selectedTaskId) !== 0) {
                if(this.interval === null && this.currentTimer === null && !this.timerRunning) {
                    // (this.timerRunning) ? this.notify("Timer already running", "is-warning") : this.startTimer()
                    this.startTimer()
                    console.log("start timer api sent")
                    this.interval = setInterval(() => this.tick(), 1000)
                }
                if(this.interval !== null && this.currentTimer !== null && this.timerRunning) {
                    // (this.timerRunning) ? this.stopTimer() : this.notify("Timer already stopped", "is-warning")
                    this.stopTimer()
                    console.log("stop timer api sent")
                    clearInterval(this.interval)
                    this.interval = null
                    this.clearTimer()
                }
            } else {
                this.notify("Please select a group and a task", "is-warning")
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
        notify(message, type) {
            bulmaToast.toast({
                message: message,
                type: type,
                dismissible: true,
                animate: { in: "fadeIn", out: "fadeOut" }
            });
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
            this.$store.commit('timerRunning', true)
            let backend = new BackendService();
            backend.storeTimer(this.api, this.selectedGroupId, this.selectedTaskId)
            .then((response) => {
                this.$store.commit('currentTimer', response.data.timer)
                // this.$store.commit('timerRunning', false)
                this.notify("Timer started", "is-success")
            }, (error) => {
                console.log(error)
                // this.$store.commit('timerRunning', false)
            })
        },
        stopTimer() {
            this.$store.commit('timerRunning', false)
            let backend = new BackendService();
            backend.updateTimer(this.api, this.selectedGroupId, this.selectedTaskId, this.currentTimer.id)
            .then((response) => {
                this.timerLogs.push(this.currentTimer)
                this.$store.commit('currentTimer', null)
                // this.$store.commit('timerRunning', false)
                this.notify("Timer stopped", "is-info")
            }, (error) => {
                console.log(error)
                // this.$store.commit('timerRunning', false)
            })
        },
        formatLog(log) {
            return formatDistanceToNow(new Date(log));
        }
    },
    mounted() {
        this.$root.$on('startCountingTime', () => {
            if(!this.timerRunning) { //if no timers are stored and a timer has not been started
                this.toggleClock()
            }
        })
        this.$root.$on('stopCountingTime', () => {
            if(this.timerRunning) {
                this.toggleClock()
            }
        })
    },
    computed: {
        isClockTicking() {
            return (this.timerRunning)
        },
        selectedGroupId() {
            return this.$store.state.selectedGroupId
        },
        selectedTaskId() {
            return this.$store.state.selectedTaskId
        },
        currentTimer() {
            return this.$store.state.currentTimer
        },
        api() {
            return this.$store.state.api
        },
        timerRunning: {
            get() {
                return this.$store.state.timerRunning
            },
            set(value) {
                this.$store.commit('timerRunning', value)
            }
        }
    }
};
</script>

<style scoped>
    .time {
        font-size: 2.3rem;
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
        max-height: 100px;
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
    .bg-green {
        background-color: #00cb39;
    }
    .bg-red {
        background-color: #fa201b;
    }
</style>
