<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label">Task : </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth is-medium">
                        <select name="tasks" @change="getTaskDetails(true)" v-model="selectedTask" :disabled="(selectedGroup === 0)">
                            <option value="0">Pick a task</option>
                            <option v-for="task in tasks" :value="task.id">{{ task.title }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
