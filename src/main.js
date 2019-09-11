import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './services/routes'
import store from './store/store'

const electron = require('electron') // see vue.config.js we import electron in renderer process to attach it prototype and access it in watch to emit event to main process of electron : this.$electron.ipcRenderer.send('ping', this.pathToWatch)

// import * as bulmaToast from "bulma-toast";
// const electron = window.require('electron')
//why window.require ?
/*
WIW, I ran into the same issue trying to use electron in the renderer process with create-react-app that uses webpack in the backend instead of browserify. window.require seems to solve it for me too though I'm not entirely clear why.

Edit: I figured out why :-) We want to require electron during runtime from the nodejs environment provided at the runtime rather than the nodejs environment used during compilation by webpack. By default, globals are bound to window and webpack compilation ignores the window global - hence window.require works.
 */
// bulmaToast.setDoc(window.document);

Vue.prototype.$electron = electron;
// Vue.prototype.$bulmaToast = bulmaToast;

Vue.config.productionTip = false;
Vue.use(VueRouter);

require('./styles/main.scss'); //Main css importing bulma => this will match webpack regex test : /\.scss$/

new Vue({
    store,
    router: new VueRouter(routes),
    render: h => h(App),
}).$mount('#app')
