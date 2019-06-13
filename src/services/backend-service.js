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
    // login() {
    //     let url = apiUrl + "/login";
    //     axios.post(url, [{
    //         email: "thomas.chartron@gmail.com",
    //         password: "thomasthomas"
    //     },
    //     {
    //         headers: {'Authorization': `Bearer ${token}`}
    //     }]);
    // }

    login(user) {
        let url = apiUrl + "/login";
        return axios.post(url, {
            email: user.email,
            password: user.password
        });
    }
    getUser(token) {
        let url = apiUrl + "/me";
        // console.log(token)
        return axios.post(url, {}, {
            headers: {"Authorization": "Bearer " + token}
        });
    }
    getGroups(token) {
        let url = apiUrl + "/companies";
        return axios.get(url, {
            headers: {"Authorization": "Bearer " + token}
        })
    }
}
