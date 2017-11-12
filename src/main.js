// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message, Notification, Loading, Input } from 'element-ui'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Loading)
Vue.use(Input)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.prototype.$help = new Vue() // 用来组件之间进行通信

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
