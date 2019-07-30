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
export default class BackendService {

    async login(user) {
        // await this.sleep(1000)
        let url = `${apiUrl}/login`;
        return axios.post(url, {
            email: user.email,
            password: user.password
        });
    }
    async getUser(token) {
        // await this.sleep(1000)
        let url = `${apiUrl}/me`;
        // console.log(token)
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        });
    }
    async getGroups(token) {
        // await this.sleep(1000)
        let url = `${apiUrl}/groups`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
    async getTasks(token, groupId) {
        // await this.sleep(1000)
        let url = `${apiUrl}/groups/${groupId}/tasks`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
    async getTask(token, groupId, taskId) {
        // await this.sleep(1000)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
    // async getTaskTimers(token, groupId, taskId) {
    //     await this.sleep(1000)
    //     let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers`;
    //     return axios.get(url, {
    //         headers: {"Authorization": `Bearer ${token}`}
    //     })
    // }
    async storeTimer(token, groupId, taskId) {
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers`;
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
    async updateTimer(token, groupId, taskId, timerId) {
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers/${timerId}`;
        return axios.put(url, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

     sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
