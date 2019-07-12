import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import CarsPage from './views/CarsPage.vue'
import CarDetails from './views/CarDetails.vue'
import UserDetails from './views/UserDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/car',
      name: 'car-page',
      component: CarsPage
    },
    {
      path:'/car/:id',
      name: 'car-details',
      component: CarDetails
    },
    {
      path: '/user/:id',
      name: 'userDetails',
      component : UserDetails
    }
  ]
})
