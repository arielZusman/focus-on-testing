import CarService from '../services/CarService';
import { SET_CARS } from './mutationTypes';

export default {
  namespaced: true,

  state: {
    cars: []
  },
  getters: {},
  mutations: {
    [SET_CARS](state, cars) {
      state.cars = cars;
    }
  },
  actions: {
    loadCars({ commit }) {
      return CarService.query().then(cars => {
        console.log({ cars });
        commit(SET_CARS, cars);
      });
    }
  }
};
