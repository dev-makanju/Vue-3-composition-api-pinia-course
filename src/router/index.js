import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewNote from '../views/ViewNote.vue'
import Stat from '../views/Stat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit/:id',
      name: 'editName',
      component: ViewNote
    },
    {
      path: '/stat',
      name: 'stats',
      component: Stat
    },
  ]
})

export default router
