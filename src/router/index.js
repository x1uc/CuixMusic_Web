import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from '../views/Search.vue'
import musiclist from '../views/Musiclist.vue'
import admin from '../views/admin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/musiclist',
    component: musiclist
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
