import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { VLazyImagePlugin } from 'v-lazy-image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import routes from './routes/routes.js'

library.add(faCircle, faPlay, faHeart, faTimes, faStar)

Vue.use(VueRouter)
Vue.use(VLazyImagePlugin)
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
