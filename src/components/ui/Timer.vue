<template>
    <div class="box">
        <div class="clock box" @click="toggleClock">
            <span class="time">{{ leadingZero(hour) }}</span>
            <span class="clock-separator">:</span>
            <span class="time">{{ leadingZero(minute) }}</span>
            <span class="clock-separator">:</span>
            <span class="time">{{ leadingZero(second) }}</span>
        </div>
        <div class="timer-logs box"></div>
    </div>
</template>

<script>
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
        }
    }
};
</script>

<style scoped>
    .time {
        font-size: 3rem;
        letter-spacing: .2rem;
        font-weight: bold;
    }
    .clock-separator {
        font-size: 1rem;
        font-weight: bold;
        padding: 0 5px;
    }
</style>
