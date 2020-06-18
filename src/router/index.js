import Vue from 'vue'
import VueRouter from 'vue-router'
import Sintomas from '../views/Sintomas'
import Procedimentos from '../views/Procedimentos'
import Home from '../views/Home'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/sintomas', component: Sintomas },
    { path: '/procedimentos', component: Procedimentos }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router