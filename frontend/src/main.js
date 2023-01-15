import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import axios from 'axios'

axios.defaults.baseURL='http://localhost:4040/'
Vue.config.productionTip = false

Vue.use(VueRouter);

const router =new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
