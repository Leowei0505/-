import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/view/HomePage.vue'
import AboutPage from '@/view/AboutPage.vue'
import GnPage from '@/view/GnPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/gn',
    component: GnPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
