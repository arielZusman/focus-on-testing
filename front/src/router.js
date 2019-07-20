import Vue from "vue";
import Router from "vue-router";
import CarsPage from "./views/CarsPage.vue";
import CarDetails from "./views/CarDetails.vue";
import UserDetails from "./views/UserDetails.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "car-page",
      component: CarsPage
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/car/:carId",
      name: "car-details",
      component: CarDetails,
      props: true
    },
    {
      path: "/user/:userId",
      name: "userDetails",
      component: UserDetails,
      props: true
    }
  ]
});
