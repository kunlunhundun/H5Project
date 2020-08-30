import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const account = r => require.ensure([], () => r(require('@/pages/login/account')), 'account')
const payment = r => require.ensure([], () => r(require('@/pages/login/payment')), 'payment')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      meta: {
          index: 1
      },
      component: login
    },
    {
      path: '/account',
      meta: {
          index: 1
      },
      component: account
    },
    {
      path: '/payment',
      meta: {
          index: 1
      },
      component: payment
    }
  ]
})
