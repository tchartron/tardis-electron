<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label">Group : </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth">
                        <select name="groups" @change="findTasks()" v-model="selectedGroupId">
                            <option value="0">Please pick a group</option>
                            <option v-for="group in groups" :value="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BackendService from '@/services/backend-service'

export default {
    name: 'Group',
    data() {
        return {}
    },
    methods: {
        findTasks() {
            this.$store.commit('flushTasks')
            this.$store.commit('isLoading', true)
            this.$store.commit('loadingMessage', 'Loading Tardis tasks ...')
            let backend = new BackendService();
            backend.getTasks(this.$store.state.api, this.$store.state.selectedGroupId)
            .then((response) => {
                for (var value of response.data) {
                    this.$store.dispatch('addTask', value)
                }
                this.$store.commit('isLoading', false)
            }, (error) => {
                console.log(error)
                this.$store.commit('isLoading', false)
            });
        }
    },
    computed: {
        // ...mapState(['groups']),
        selectedGroupId: {
            get() {
                return this.$store.selectedGroupId
            },
            set(value) {
                this.$store.commit('selectedGroupId', value)
            }
        },
        groups() {
            return this.$store.state.groups
        }
    },
    mounted() {
    }
};
</script>
