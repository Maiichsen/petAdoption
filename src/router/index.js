import AddPetView from '@/views/AddPetView.vue'
import HomeView from '@/views/HomeView.vue'
import PetListView from '@/views/PetListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pets',
      name: 'pets',
      component: PetListView
    },
    {
      path: '/add',
      name: 'add',
      component: AddPetView
    },
  ]
})

export default router

