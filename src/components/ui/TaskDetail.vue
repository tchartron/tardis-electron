<template>
    <div class="pad-btn">
        <button class="button is-info" @click="getTask" :disabled="selectedTaskId == 0">
            <span class="icon is-small"><i class="fas fa-question" aria-hidden="true"></i></span>
            <span>Task Details</span>
        </button>
        <div class="modal" :class="{'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p class="underline">Task Details :</p>
                    <p><span class="bold underline">Id :</span> {{ task.id }}</p>
                    <p><span class="bold underline">Company Id :</span> {{ task.company_id }}</p>
                    <p><span class="bold underline">Title :</span> {{ task.title }}</p>
                    <p><span class="bold underline">Description :</span> {{ task.description }}</p>
                    <p><span class="bold underline">Completed :</span> {{ (task.completed) ? 'Yes' : 'No' }}</p>
                    <p><span class="bold underline">Created :</span> {{ task.created_at }}</p>
                    <p><span class="bold underline">Updated :</span> {{ task.updated_at }}</p>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
            </div>
        </div>
    </div>
</template>

<script>
import BackendService from '@/services/backend-service'

export default {
    name: 'TaskDetail',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        getTask() {
            // if(this.task === null || this.task.id == this.selectedTaskId) {
            //     this.isActive = true
            //     return true;
            // }
            this.$store.commit('isLoading', true)
            this.$store.commit('loadingMessage', "Getting task details ...")
            let backend = new BackendService();
                backend.getTask(this.$store.state.api, this.$store.state.selectedGroupId, this.$store.state.selectedTaskId)
                .then((response) => {
                    this.$store.commit('task', response.data)
                    // this.isLoading = false;
                    this.$store.commit('isLoading', false)
                    this.isActive = true
                }, (error) => {
                    // console.log(error)
                    this.$store.commit('isLoading', false)
                })
        }
    },
    computed: {
        task() {
            return this.$store.state.task
        },
        selectedTaskId() {
            return this.$store.state.selectedTaskId
        }
    }
};
</script>

<style scoped>
.underline {
    text-decoration: underline;
}
.bold {
    font-weight: bold;
}
</style>
