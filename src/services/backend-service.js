// const axios = require('axios');
import axios from 'axios'

// const apiAdress = "http://192.168.0.24";
const apiAdress = "http://127.0.0.1";
const apiSuffix = "/api";
const apiUrl = apiAdress + apiSuffix;
    // var headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    // }
export default class BackendService {

    async login(user) {
        await this.sleep(3000)
        let url = apiUrl + "/login";
        return axios.post(url, {
            email: user.email,
            password: user.password
        });
    }
    async getUser(token) {
        await this.sleep(3000)
        let url = apiUrl + "/me";
        // console.log(token)
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${token}`}
        });
    }
    async getGroups(token) {
        await this.sleep(3000)
        let url = apiUrl + "/companies";
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
    async getTasks(token, groupId) {
        await this.sleep(3000)
        let url = apiUrl + `/companies/${groupId}/tasks`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

     sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
