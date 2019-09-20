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
        tasks: [],
        selectedGroupId: 0,
        selectedTaskId: 0,
        task: Object,
        taskTimeSummary: Object,
        currentTimer: null,
        maxIdleTime: 30,
        theme: {
            selectedThemeHref: 0,
            themeLink: ""
        }
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
        addTask(state, task) {
            state.tasks.push(task)
        },
        flushTasks(state, task) {
            state.tasks = []
        },
        isLoading(state, value) {
            state.isLoading = value
        },
        loadingMessage(state, message) {
            state.loadingMessage = message
        },
        selectedGroupId(state, groupId) {
            state.selectedGroupId = groupId
        },
        selectedTaskId(state, taskId) {
            state.selectedTaskId = taskId
        },
        task(state, task) {
            state.task = task
        },
        setTaskTimeSummary(state, summary) {
            state.taskTimeSummary = summary
        },
        currentTimer(state, value) {
            state.currentTimer = value
        },
        maxIdleTime(state, value) {
            state.maxIdleTime = value
        },
        selectedThemeHref(state, value) {
            state.theme.selectedThemeHref = value
        },
        themeLink(state, value) {
            state.theme.themeLink = value
        }
    },

    actions: {
        addGroup(context, group) {
            if(!context.state.groups.some(e => e.name === group.name)) {
                context.commit('addGroup', group)
            }
        },
        addTask(context, task) {
            if(!context.state.tasks.some(e => e.title === task.title)) {
                context.commit('addTask', task)
            }
        }
    }
});
