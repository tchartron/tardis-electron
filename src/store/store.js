import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        api: Object,
        user: Object,
        isLoading: false,
        loadingMessage: String,
        groups: [],
        selectedGroupId: Number
    },

    getters: {
    },

    mutations: {
        api(state, value) {
            state.api = value
        },
        user(state, value) {
            state.user = value
        },
        addGroup(state, group) {
            state.groups.push(group)
        },
        isLoading(state, value) {
            state.isLoading = value
        },
        loadingMessage(state, message) {
            state.loadingMessage = message
        },
        selectedGroupId(state, groupId) {
            state.selectedGroupId = groupId
        }
    },

    actions: {
        addGroup(context, group) {
            console.log(group)
            if(!context.state.groups.some(e => e.name === group.name)) {
                context.commit('addGroup', group)
            }
        }
    }
});
