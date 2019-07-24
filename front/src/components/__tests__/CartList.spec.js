/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CartList from '@/components/CartList';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

let state, store;

describe('CarList.vue', () => {
  beforeEach(() => {
    state = {
      cart: {}
    };

    store = new Vuex.Store({
      modules: {
        UserStore: {
          namespaced: true,
          state
        }
      }
    });
  });

  it('should render a list of cars', () => {
    state.cart = {
      '5d3056128f1d3a2f5b0cc134': {
        model: 'Alfa Romeo Stelvio',
        price: 5,
        count: 2
      },
      '5d3056128f1d3a2f5b0cc135': {
        model: 'Alfa Romeo GTV',
        price: 41298.92,
        count: 1
      }
    };

    const wrapper = shallowMount(CartList, { localVue, store });

    const carItems = wrapper.findAll('[data-test=cart-item]');

    expect(carItems.length).toBe(2);
  });
});
