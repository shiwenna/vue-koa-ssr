import { createApp } from './main'
const { app, router } = createApp()
// 同步服务端信息
console.log('----++-')
if (window.__INITIAL_STATE__) {
  app.$store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(() => {
  app.$mount('#app')
})
