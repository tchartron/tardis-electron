import axios from 'axios'

const remoteAdresse = "https://jenil.github.io/bulmaswatch/api/themes.json"

export default class BulmaswatchThemeService {
    getThemes() {
        return axios.get(remoteAdresse)
    }
}
