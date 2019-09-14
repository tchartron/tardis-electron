<template>
    <div class="box">
        <div class="clock box" @click="toggleClock">
            <span class="hour">{{ hour }}</span>
            <span class="clock-separator">:</span>
            <span class="minute">{{ minute }}</span>
            <span class="clock-separator">:</span>
            <span class="second">{{ second }}</span>
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
        }
    }
};
</script>
