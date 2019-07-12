import Vue from 'vue'
import Vuex from 'vuex'

import UserStore from './modules/UserStore.js'
import SocketStore from './modules/SocketStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    UserStore,
    SocketStore,
},
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
