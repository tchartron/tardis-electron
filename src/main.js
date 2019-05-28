import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './services/routes'

Vue.config.productionTip = false
Vue.use(VueRouter);

require('./styles/main.scss'); //Main css importing bulma => this will answer webpack regex test : /\.scss$/

new Vue({
    router: new VueRouter(routes),
    render: h => h(App),
}).$mount('#app')
