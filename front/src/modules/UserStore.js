import UserService from '../services/UserService.js';
import { SET_USER, REMOVE_USER, ADD_TO_CART } from './mutationTypes';

export default {
  namespaced: true,

  state: {
    user: null,
    cart: {}
  },
  getters: {},
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
    [REMOVE_USER](state) {
      state.user = null;
    },
    [ADD_TO_CART](state, car) {
      const cart = { ...state.cart };

      if (cart[car._id]) {
        cart[car._id].count += 1;
      } else {
        cart[car._id] = {
          model: car.model,
          price: car.price,
          count: 1
        };
      }

      state.cart = cart;
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
    },
    addToCart({ commit }, car) {
      commit(ADD_TO_CART, car);
    }
  }
};
