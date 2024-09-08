import '@/assets/init.css'
import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '@/views/LayoutPage.vue'
import HomePage from '@/views/HomePage.vue'
import NewsPage from '@/views/NewsPage.vue'
import CharactersPage from '@/views/CharactersPage.vue'
import CommunityPage from '@/views/CommunityPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'layout',
      component: LayoutPage,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path:'/news',
      name:'news',
      component:NewsPage
    },
    {
      path:'/characters',
      name:'characters',
      component:CharactersPage
    },
    {
      path:'/community',
      name:'community',
      component:CommunityPage
    }
  ]
})

export default router
