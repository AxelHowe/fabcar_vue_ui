import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaceOrder from '../views/PlaceOrder.vue'
import AllOrders from '../views/AllOrders.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/placeorder',
        name: 'PlaceOrder',
        component: PlaceOrder
    },{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/allorders',
        name: 'AllOrders',
        component: AllOrders
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
