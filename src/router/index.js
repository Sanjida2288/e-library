import Vue from 'vue'
import VueRouter from 'vue-router'
import Institution from '../views/Institution'
import Programs from '../views/Programs'
import Courses from '../views/Courses'
Vue.use(VueRouter)

const routes = [


  {
    path: '/institution',
    name: 'Institution',
    component: Institution
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/Courses',
    name: 'Courses',
    component: Courses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
