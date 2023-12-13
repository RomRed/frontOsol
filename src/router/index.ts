import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import OsolBase from '../views/OsolBase.vue'
import { AuthGuard } from '@/_helpers/auth-guard.js'
import osolpico from '@/views/OsolPico.vue'
import organisations from '@/views/Organisations.vue'
import liste_user from '@/views/ListOfUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/osolbase',
      name: 'osolbase',
      component: OsolBase, beforeEnter: AuthGuard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard, beforeEnter: AuthGuard
    },
    {
      path: "/:pathMatch(.*)*", redirect: '/'
    },
    {
      path: "/osolpico",
      name: "osolpico",
      component: osolpico, beforeEnter: AuthGuard
    },
    {
      path: "/organisations",
      name: "organisations",
      component: organisations, beforeEnter: AuthGuard
    },
    {
      path: "/liste_user",
      name: "liste_user",
      component: liste_user, beforeEnter: AuthGuard
    },
  ]
})

export default router
