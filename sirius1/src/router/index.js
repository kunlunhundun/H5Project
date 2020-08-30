import Vue from 'vue'
import Router from 'vue-router'

//  懒路由加载
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
//const profile = r => require.ensure([], () => r(require('@/pages/profile/profile')), 'profile')
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const vpnline = r => require.ensure([], () => r(require('@/pages/login/vpnline')), 'vpnline')
const filterapp = r => require.ensure([], () => r(require('@/pages/login/filterapp')), 'filterapp')
const feedback = r => require.ensure([], () => r(require('@/pages/login/feedback')), 'feedback')
const payment = r => require.ensure([], () => r(require('@/pages/login/payment')), 'payment')
const account = r => require.ensure([], () => r(require('@/pages/login/account')), 'account')
const paycard = r => require.ensure([], () => r(require('@/pages/login/paycard')), 'paycard')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            meta: {
                index: 1
            },
            component: home
        },
        {
            path: '/login',
            meta: {
                index: 1
            },
            component: login
        },
        {
            path: '/vpnline',
            meta: {
                index: 1
            },
            component: vpnline
        },
        {
            path: '/filterapp',
            meta: {
                index: 1
            },
            component: filterapp
        },
        {
            path: '/feedback',
            meta: {
                index: 1
            },
            component: feedback
        },
        {
            path: '/payment', 
            meta: {
                index: 1
            },
            component: payment
        },
        {
            path: '/account',
            meta: {
                index: 1
            },
            component: account
        },
        {
            path: '/paycard',
            meta: {
                index: 1
            },
            component: paycard
        },
    ]
})


