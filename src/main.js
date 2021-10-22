import Vue from 'vue'
import App from './App.vue'

import './assets/css/global.css'

Vue.config.productionTip = false

import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
