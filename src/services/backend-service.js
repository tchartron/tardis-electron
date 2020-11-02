import axios from 'axios'

let apiAdress = "";
switch(process.env.NODE_ENV) {
    case "development":
        apiAdress = "http://127.0.0.1:8181";
    break;
    case "production":
        apiAdress = "https://api.tardis.net";
    break;
    default:
        apiAdress = "http://127.0.0.1:8181";
    break;
}
const apiSuffix = "/api";
const apiUrl = apiAdress + apiSuffix;
const _401interceptor = null;
    // var headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    // }
import store from '@/store/store'
import differenceInSeconds from 'date-fns/differenceInSeconds'

export default class BackendService {
    constructor() {
        this.mount401Interceptor();
    }

    mount401Interceptor() {
        this._401interceptor = axios.interceptors.response.use(
            (response) => {
                return response
            },
            async (error) => {
                if (error.request.status == 401 && store.getters.user.loggedInTimestamp !== undefined) {
                    // Refresh the access token
                    try{
                        let url = `${apiUrl}/login`;
                        await axios.post(url, {
                            email: store.getters.user.email,
                            password: store.getters.user.password
                        }).then((response) => {
                            store.commit('api', response.data)
                            store.commit('userLoggedInTimestamp', new Date(Date.now()))
                        }, (error) => {
                            console.log(error)
                        });
                        // Retry the original request
                        return axios({
                            method: error.config.method,
                            url: error.config.url,
                            data: error.config.data,
                            headers: {"Authorization": `Bearer ${store.getters.api.access_token}`}
                        })
                    } catch (e) {
                        // Refresh has failed - reject the original request
                        throw error
                    }
                }
                // If error was not 401 just reject as is
                throw error
            }
        )
    }
    unmount401Interceptor() {
        axios.interceptors.response.eject(this._401interceptor)
    }

    async renewToken(user, api) {
        let now = new Date(Date.now());
        let timeLogged = differenceInSeconds(now, user.loggedInTimestamp)
        if(timeLogged > parseInt(api.expires_in)) {
            await this.login(store.getters.user)
                .then((response) => {
                    store.commit('api', response.data)
                    store.commit('userLoggedInTimestamp', new Date(Date.now()))
                }, (error) => {
                    console.log("Token renew error")
                })
        }
    }
    async login(user) {
        let url = `${apiUrl}/login`;
        return axios.post(url, {
            email: user.email,
            password: user.password
        });
    }
    async getUser(api) {
        let url = `${apiUrl}/me`;
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        });
    }
    async getGroups(api) {
        // await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async getTasks(api, groupId) {
        // await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async getTask(api, groupId, taskId) {
        // await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async storeTimer(api, groupId, taskId) {
        // await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers`;
        return axios.post(url, {}, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }
    async updateTimer(api, groupId, taskId, timerId) {
        // await this.renewToken(store.getters.user, store.getters.api)
        let url = `${apiUrl}/groups/${groupId}/tasks/${taskId}/timers/${timerId}`;
        return axios.put(url, {}, {
            headers: {"Authorization": `Bearer ${api.access_token}`}
        })
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
