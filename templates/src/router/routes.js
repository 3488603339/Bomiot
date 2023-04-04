import constantRoutes from "./constant"
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'test', name: 'test', component: () => import('pages/NewTest.vue') },
      { path: 'user', name: 'user', component: () => import('pages/NewTest.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

constantRoutes.forEach(item => {
  routes.push(item)
})

export default routes
