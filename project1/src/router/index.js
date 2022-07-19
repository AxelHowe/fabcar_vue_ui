import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaceOrder from '../views/PlaceOrder.vue'
import AllOrders from '../views/AllOrders.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Change from '../views/Change.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/placeorder',
        name: 'PlaceOrder',
        component: PlaceOrder,
        meta:{title:"1.3"}
    },{
        path: '/',
        name: 'Home',
        component: Home,
        meta:{title:"1.3"}
    },{
        path: '/allorders',
        name: 'AllOrders',
        component: AllOrders,
        meta:{title:"1.3"}
    },{
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{title:"1.3"}
    },{
        path: '/register',
        name: 'Register',
        component: Register,
        meta:{title:"1.3"}
    },{
        path: '/change',
        name: 'Change',
        component: Change,
        meta:{title:"1.3"}
    },{
        path: '/account',
        name: 'Account',
        component: Account,
        meta:{title:"1.3"}
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
