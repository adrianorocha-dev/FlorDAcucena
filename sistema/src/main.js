import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'
import './firebase'
import VueFire from 'vuefire'

var { app } = require('./firebase');

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFire)
Vue.use(app)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
