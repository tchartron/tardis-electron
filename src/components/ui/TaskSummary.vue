<template>
        <div class="box" v-if="taskSummary != null">
            <p class="underline">Task summary :</p>
            <p class="">Total time spent <span class="bold">{{ taskSummary.totalTime }}</span></p>
            <p class="">Your time spent<span class="bold"> {{ taskSummary.userTime }}</span></p>
            <p class="">Total timers <span class="bold">{{ taskSummary.timersNumber }}</span></p>
            <button class="button is-warning is-small has-margin-top-10" @click="getTaskDetails(false)">
                Refresh
            </button>
        </div>
</template>
