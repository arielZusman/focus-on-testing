/* eslint-env jest */
import UserStore from '@/modules/UserStore';
import { ADD_TO_CART } from '@/modules/mutationTypes';

const addToCart = UserStore.mutations[ADD_TO_CART];

describe('UserStore', () => {
  it('mutation ADD_TO_CART should add car to store', () => {
    const state = {
      cart: {}
    };

    const car = {
      _id: '5d3056128f1d3a2f5b0cc134',
      model: 'Alfa Romeo Stelvio',
      price: 5
    };

    addToCart(state, car);

    expect(state.cart[car._id].count).toBe(1);
    expect(state.cart[car._id].model).toBe(car.model);
    expect(state.cart[car._id].price).toBe(car.price);
  });

  it('mutation ADD_TO_CART should add car and increment count', () => {
    const state = {
      cart: {}
    };

    const car = {
      _id: '5d3056128f1d3a2f5b0cc134',
      model: 'Alfa Romeo Stelvio',
      price: 5
    };

    addToCart(state, car);

    expect(state.cart[car._id].count).toBe(1);

    addToCart(state, car);

    expect(state.cart[car._id].count).toBe(2);
  });
});
