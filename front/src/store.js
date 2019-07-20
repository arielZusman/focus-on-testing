import Vue from "vue";
import Vuex from "vuex";

import UserStore from "@/modules/UserStore";
import CarsStore from "@/modules/CarsStore";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    UserStore,
    CarsStore
  },
  state: {},
  mutations: {},
  actions: {}
});
