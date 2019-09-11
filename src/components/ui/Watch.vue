<template>
    <div class="box">
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
    </div>
</template>

<script>

</script>

<style>

</style>
