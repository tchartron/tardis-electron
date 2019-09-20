// const axios = require('axios');
import axios from 'axios'

// const apiAdress = "http://192.168.0.24";
const apiAdress = "http://127.0.0.1:8181";
const apiSuffix = "/api";
const apiUrl = apiAdress + apiSuffix;
    // var headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    // }
import store from '@/store/store'
import differenceInSeconds from 'date-fns/differenceInSeconds'

export default class BackendService {

    async renewToken(user, api) {
        let now = new Date(Date.now());
        let timeLogged = differenceInSeconds(now, user.loggedInTimestamp)
        console.log("Logged since" + timeLogged)
        if(timeLogged > parseInt(api.expires_in)) {
                await this.login(store.getters.user)
        }
    }

    async login(user) {
        // await this.sleep(1000)
        let url = `${apiUrl}/login`;
        return axios.post(url, {
            email: user.email,
            password: user.password
        });
    }
    async getUser(api) {
        // await this.sleep(1000)
        let url = `${apiUrl}/me`;
        // console.log(token)
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        });
    }
    async getGroups(api) {
        // await this.sleep(1000)
        await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async getTasks(api, groupId) {
        // await this.sleep(1000)
        await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async getTask(api, groupId, taskId) {
        // await this.sleep(1000)
        await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    // async getTaskTimers(token, groupId, taskId) {
    //     await this.sleep(1000)
    //     let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers`;
    //     return axios.get(url, {
    //         headers: {"Authorization": `Bearer ${token}`}
    //     })
    // }
    async storeTimer(api, groupId, taskId) {
        await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers`;
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async updateTimer(api, groupId, taskId, timerId) {
        await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers/${timerId}`;
        return axios.put(url, {}, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }

     sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
