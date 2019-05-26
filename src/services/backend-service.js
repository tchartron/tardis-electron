// const axios = require('axios');
import axios from 'axios'

const apiAdress = "http://192.168.0.24";
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

    login() {
        let url = apiUrl + "/login";
        axios.post(url, {
            email: "thomas.chartron@gmail.com",
            password: "thomasthomas"
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}
