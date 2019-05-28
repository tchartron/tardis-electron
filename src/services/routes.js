import App from './../App.vue'
import Login from './../components/Login.vue'
import Watch from './../components/Watch.vue'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/watch',
            name: 'watch',
            component: Watch
        }
    ]
}
