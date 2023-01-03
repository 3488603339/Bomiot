import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import LoadingBar from 'components/LoadingBar/LoadingBar'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)

  })

  Router.beforeEach((to, from, next) => {
    LoadingBar.start()
  })
  Router.afterEach((to, from, failure) => {
    LoadingBar.stop()
  })
  return Router
})
