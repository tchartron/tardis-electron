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
                <div class="timer-logs box"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as bulmaToast from 'bulma-toast'

export default {
    data() {
        return {
            hour: 0,
            minute: 0,
            second: 0,
            interval: null
        }
    },
    methods: {
        toggleClock() {
            if(this.interval === null) {
                this.interval = setInterval(() => this.tick(), 1000)
            } else {
                clearInterval(this.interval)
                this.interval = null
                this.clearTimer()
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
                this.currentTimer.path = "";
                this.currentTimer.timer = {};
            })
        },
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
</style>
