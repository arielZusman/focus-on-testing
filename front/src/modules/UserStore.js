import UserService from '../services/UserService.js';
import { SET_USER, REMOVE_USER } from './mutationTypes';

export default {
  namespaced: true,

  state: {
    user: null
  },
  getters: {},
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
    [REMOVE_USER](state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, userCred) {
      const user = await UserService.login(userCred);
      commit(SET_USER, user);

      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return user;
    },
    async signup({ commit }, userCred) {
      const user = await UserService.signup(userCred);
      commit(SET_USER, user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return user;
    },
    async logout({ commit }) {
      const result = await UserService.logout();

      if (result.message) {
        commit(REMOVE_USER);
        localStorage.removeItem('loggedInUser');
      }
    }
  }
};
