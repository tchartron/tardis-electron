import App from './../App.vue'
import Login from './../components/Login.vue'
import Watch from './../components/Watch.vue'
import Clock from './../components/Clock.vue'
import TimerPage from './../components/pages/TimerPage.vue'
import SettingPage from './../components/pages/SettingPage.vue'

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
        },
        // , {
        //     path: '/watch',
        //     name: 'watch',
        //     component: Watch,
        //     props: true
        // }, {
        //     path: '/clock',
        //     name: 'clock',
        //     component: Clock,
        //     props: true
        // }
        {
            path: '/timer-page',
            name: 'timer-page',
            component: TimerPage,
            props: true
        }, {
            path: '/setting-page',
            name: 'setting-page',
            component: SettingPage,
            props: true
        }
    ]
}
