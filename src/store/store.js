import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        groups: []
    },

    getters: {
    },

    mutations: {
        addGroup(state, group) {
            state.groups.push(group)
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
