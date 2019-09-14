<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label">Task : </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth">
                        <select name="tasks" v-model="selectedTaskId" :disabled="(selectedGroupId === 0)">
                            <option value="0">Pick a task</option>
                            <option v-for="task in tasks" :value="task.id">{{ task.title }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackendService from '@/services/backend-service'

export default {
    name: 'Task',
    methods: {
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        },
        selectedTaskId: {
            get() {
                return this.$store.state.selectedTaskId
            },
            set(value) {
                this.$store.commit('selectedTaskId', value)
            }
        },
        selectedGroupId() {
            return this.$store.state.selectedGroupId
        }
    }
};
</script>
