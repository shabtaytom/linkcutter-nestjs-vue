import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { store } from './store/store'
import { router } from './router/router'
import { initRouteProtection } from './router/protect-routes'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
initRouteProtection(router,store)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
