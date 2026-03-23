import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import LearningWithPros from '@/views/LearningWithPros.vue'
import FindingTangoEvents from '@/views/FindingTangoEvents.vue'
import FindingTangoClub from '@/views/FindingTangoClub.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/learningwithpros',
      name: 'learningwithpros',
      component: LearningWithPros,
    },
    {
      path: '/findingtangoevents',
      name: 'findingtangoevents',
      component: FindingTangoEvents,
    },
    {
      path: '/findingtangoclub',
      name: 'findingtangoclub',
      component: FindingTangoClub,
    },
  ],
})

export default router
