import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        loadingMessage: String,
        groups: []
    },

    getters: {
    },

    mutations: {
        addGroup(state, group) {
            state.groups.push(group)
        },
        loading(state, value) {
            state.isLoading = value
        },
        loadingMessage(state, message) {
            state.loadingMessage = message
        }
    },

    actions: {
        addGroup(context, group) {
            if(!context.state.groups.includes(group)) {
                context.commit('addGroup', group)
            }
        }
    }
});
