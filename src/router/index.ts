import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/treino', name: 'Treino', component: () => import('../views/Treino.vue') },
  { path: '/dieta', name: 'Dieta', component: () => import('../views/Dieta.vue') },
  { path: '/progresso', name: 'Progresso', component: () => import('../views/Progresso.vue') },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router


  {
    path: '/checkin',
    name: 'Checkin',
    component: () => import('../views/CheckinView.vue')
  }
