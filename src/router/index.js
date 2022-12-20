import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/ContatoView.vue')
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('../views/CursosView.vue')
  },
  {
    path: '/cursos/:curso',
    name: 'curso',
    props: true,
    component: () => import('../views/CursoView.vue'),
    children: [
      {
        path: ':aula', // path: '/cursos/:curso/:aula'
        name: 'aula',
        component: () => import('../views/AulaView.vue'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
