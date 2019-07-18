import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CarsPage from "./views/CarsPage.vue";
import CarDetails from "./views/CarDetails.vue";
import UserDetails from "./views/UserDetails.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/car",
      name: "car-page",
      component: CarsPage
    },
    {
      path: "/car/:id",
      name: "car-details",
      component: CarDetails
    },
    {
      path: "/user/:id",
      name: "userDetails",
      component: UserDetails
    }
  ]
});
