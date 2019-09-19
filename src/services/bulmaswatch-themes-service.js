import axios from 'axios'

const remoteAdresse = "https://jenil.github.io/bulmaswatch/api/themes.json"

export default class BulmaswatchThemeService {
    // constructor(collection) {
    //     this.themeCollection = collection
    // }

    getThemes() {
        return axios.get(remoteAdresse)
    }
}
