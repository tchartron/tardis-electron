import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('./styles/main.scss'); //Main css importing bulma

new Vue({
  render: h => h(App),
}).$mount('#app')
