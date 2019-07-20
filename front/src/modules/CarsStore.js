import CarService from "../services/CarService";

export default {
  state: {
    cars: []
  },
  getters: {
    carsToDisplay: state => state.cars
  },
  mutations: {
    setCars(state, { cars }) {
      state.cars = cars;
    }
  },
  actions: {
    loadCars(context) {
      return CarService.query().then(cars => {
        console.log({ cars });
        context.commit({ type: "setCars", cars });
      });
    }
  }
};
