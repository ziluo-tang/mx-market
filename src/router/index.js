import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/market'
    },
    {
      path: '/market',
      name: 'Market',
      component: () => import('@/components/market'),
      redirect: '/market/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/components/home')
        },
        {
          path: 'category',
          name: 'Category',
          component: () => import('@/components/category')
        },
        {
          path: 'shopcart',
          name: 'Shopcart',
          component: () => import('@/components/shopcart')
        },
        {
          path: 'user',
          name: 'User',
          component: () => import('@/components/user')
        }
      ]
    }
  ]
})
