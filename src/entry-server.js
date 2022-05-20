import { createApp } from './main'
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error({code: 404}))
      }
      // 遍历路由下所以的组件，如果有需要服务端渲染的请求，则进行请求
      Promise.all(matchedComponents.map(component => {
        console.log('-----')
        if (component.serverRequest) {
          return component.serverRequest(app.$store)
        }
      })).then(() => {
        context.state = app.$store.state // 就是这句，纠结了两天
        resolve(app)
      }).catch(reject)
    // resolve(app)
    }, reject)
  })
}
