import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes/routes.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
