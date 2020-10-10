import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import routes from './routes/routes.js'

library.add(faCircle, faPlay)

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

var router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
