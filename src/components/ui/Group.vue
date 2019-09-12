<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label">Group : </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth is-small">
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
        findGroups() {
            // this.isLoading = true
            this.$store.commit('isLoading', true)
            // this.groups = [];
            // this.loadingMessage = "Loading Tardis groups ...";
            this.$store.commit('loadingMessage', 'Loading Tardis groups ...')
            let backend = new BackendService();
            backend.getGroups(this.$store.state.api)
            .then((response) => {
                // console.log(response.data)
                for (var value of response.data) {
                    // console.log(value);
                    // this.groups.push(value)
                    this.$store.dispatch('addGroup', value)
                }
                // this.isLoading = false
                this.$store.commit('isLoading', false)
            }, (error) => {
                console.log(error)
                // this.isLoading = false;
                this.$store.commit('isLoading', false)
            });
        },
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
        this.findGroups();
    }
};
</script>
