import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './services/routes'
const electron = require('electron') // see vue.config.js
// const electron = window.require('electron')
//why window.require ?
/*
WIW, I ran into the same issue trying to use electron in the renderer process with create-react-app that uses webpack in the backend instead of browserify. window.require seems to solve it for me too though I'm not entirely clear why.

Edit: I figured out why :-) We want to require electron during runtime from the nodejs environment provided at the runtime rather than the nodejs environment used during compilation by webpack. By default, globals are bound to window and webpack compilation ignores the window global - hence window.require works.
 */

Vue.prototype.$electron = electron;

Vue.config.productionTip = false;
Vue.use(VueRouter);

require('./styles/main.scss'); //Main css importing bulma => this will match webpack regex test : /\.scss$/

new Vue({
    router: new VueRouter(routes),
    render: h => h(App),
}).$mount('#app')
