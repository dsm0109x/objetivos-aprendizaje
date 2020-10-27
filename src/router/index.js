import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aprendizaje from '../views/Aprendizaje.vue'
import Circunstancia from '../views/Circunstancia.vue'
import Verbo from '../views/Verbo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verbo',
    name: 'Verbo',
    component: Verbo
  },
  {
    path: '/aprendizaje',
    name: 'Aprendizaje',
    component: Aprendizaje
  },
  {
    path: '/circunstancia',
    name: 'Circunstancia',
    component: Circunstancia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
