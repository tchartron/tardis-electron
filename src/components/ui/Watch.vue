<template>
    <div class="box">
        <div class="control has-icons-left has-icons-right">
            <input class="input is-medium is-rounded" type="text" placeholder="/path/to/watch" v-model="watcherPath" :disabled="(selectedTaskId == 0)">
            <span class="icon is-left">
                <i class="fas fa-folder-open"></i>
            </span>
        </div>
        <div class="field">
            <p class="control has-text-centered has-margin-top-20">
                <button class="button is-dark is-medium has-margin-right-10" @click="watch" v-show="!isWatching" :disabled="(watcherPath === '' || selectedTaskId == 0)">
                    Watch
                </button>
                <button class="button is-dark is-medium has-margin-left-10" @click="stopWatch" v-show="isWatching">
                    Unwatch
                </button>
            </p>
            <p>Idle Time</p>
            <progress class="progress is-medium has-margin-top-20" :value="idleTime" :max="maxIdleTime"></progress>
        </div>
        <div class="box watcher-output" v-if="watcherData.length > 0">
            <div class="notification is-warning" v-for="data in watcherData">
                <span style="display: block;">Event : {{ data.event }}</span>
                <span style="display: block;">Path : {{ data.path }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Watch',
    data() {
        return {
            watcherData: [],
            isWatching: false,
            watcherPath: "",
            watcherReady: false,
            idleInterval: null,
            idleTime: 0
        }
    },
    methods: {
        watch() {
            this.isWatching = !this.isWatching;
            this.$electron.ipcRenderer.send('ping', this.watcherPath)
            // this.countIdle();
        },
        stopWatch() {
            this.isWatching = !this.isWatching;
            this.$electron.ipcRenderer.send('stop')
            clearInterval(this.idleInterval)
            this.idleInterval = null
            this.idleTime = 0
            this.$root.$emit('stopCountingTime')
            this.watcherReady = false // we will need to reinstantiate watcher from main process (app.js)
        },
        countIdle() {
            this.idleInterval = setInterval(() => {
                this.idleTime++
                if(this.idleTime > this.maxIdleTime) {
                    clearInterval(this.idleInterval)
                    this.idleInterval = null
                    this.idleTime = 0
                    this.$root.$emit('stopCountingTime')
                }
            }, 1000)
        }
    },
    mounted() {
        this.$electron.ipcRenderer.on('pong', (event, data) => {
            // this.watcherData.push(data) // Don't store watcher logs maybe make this a activable setting later
            if(this.watcherReady) {
                console.log("watcher start timer")
                this.idleTime = 0
                // if(this.idleInterval === null) {
                //     this.countIdle()
                // }
                if(!this.timerRunning) {
                    this.$root.$emit('startCountingTime')
                }
            }
            if(this.idleInterval === null) {
                this.countIdle()
            }
        });
        this.$electron.ipcRenderer.on('ready', (event) => {
            console.log('watcher ready')
            this.watcherReady = true
        })
    },
    computed: {
        selectedTaskId() {
            return this.$store.state.selectedTaskId
        },
        maxIdleTime() {
            return this.$store.state.maxIdleTime
        },
        timerRunning() {
            return this.$store.state.timerRunning
        }
    }
};
</script>

<style>

</style>
