import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './modules/user.js'
import CarsModule from './modules/cars.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserModule,
    CarsModule
  },
  state: {
      
  },
  mutations: {

  },
  actions: {

  }
})
