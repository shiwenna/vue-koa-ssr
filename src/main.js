// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { createRouter } from './router'
import createStore from './store'
import axios from 'axios'

Vue.prototype.$http = axios // 类似于vue-resource的调用方法

Vue.use(ElementUI)

/* eslint-disable no-new */
// new Vue({
//   router: router,
//   render: h => h(App)
// }).$mount('#app')

export function createApp () {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router }
}
