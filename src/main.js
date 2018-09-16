import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use(vm)
