import axios from 'axios'

const apiAdress = "http://127.0.0.1:8181";
const apiSuffix = "/api/gitlab";
const apiUrl = apiAdress + apiSuffix;


export default class GitlabService {
    async getGroups(token) {
        // await this.sleep(1000)
        let url = `${apiUrl}/groups`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
    async getGroupsIssues(token, groupId) {
        // await this.sleep(1000)
        let url = `${apiUrl}/groups/${groupId}/issues`;
        return axios.get(url, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
}
