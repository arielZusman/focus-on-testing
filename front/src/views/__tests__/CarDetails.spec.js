/* eslint-env jest */
import {
  mount,
  shallowMount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Vuex from 'vuex';
import CarDetails from '@/views/CarDetails';

import carResponse from './carResponse.json';

import CarService from '@/services/CarService.js';
import ReviewService from '@/services/ReviewService.js';

const localVue = createLocalVue();
localVue.use(Vuex);

let state, store;

describe.only('CarDetails.vue', () => {
  beforeEach(() => {
    state = {
      user: null
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

  it('should render initial state', async () => {
    expect.assertions(5);
    jest.spyOn(CarService, 'getById').mockResolvedValue(carResponse);

    const wrapper = shallowMount(CarDetails, {
      store,
      localVue,
      propsData: { carId: '5d3056128f1d3a2f5b0cc134' },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    await flushPromises();

    const carModel = wrapper.find('[data-test=car-model]');
    const loginLink = wrapper.find('[data-test=login-link]');
    const reviewList = wrapper.find('review-list-stub');

    expect(wrapper.isVueInstance()).toBe(true);
    expect(carModel.text()).toBe('Alfa Romeo Stelvio');
    expect(loginLink.exists()).toBe(true);
    expect(reviewList.exists()).toBe(true);
    expect(wrapper.find('review-form-stub').exists()).toBe(false);
  });

  it('should render review form when user is logged in', async () => {
    expect.assertions(1);

    state.user = {
      username: 'Puki Muki',
      email: 'puki.muki@test.com',
      _id: '5d349fe90460b663ab7edd16'
    };

    jest.spyOn(CarService, 'getById').mockResolvedValue(carResponse);

    const wrapper = shallowMount(CarDetails, {
      store,
      localVue,
      propsData: { carId: '5d3056128f1d3a2f5b0cc134' },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    await flushPromises();

    expect(wrapper.find('review-form-stub').exists()).toBe(true);
  });

  it('should add saved review to dom', async () => {
    expect.assertions(2);

    state.user = {
      username: 'Puki Muki',
      email: 'puki.muki@test.com',
      _id: '5d349fe90460b663ab7edd16'
    };

    jest.spyOn(CarService, 'getById').mockResolvedValue(carResponse);
    jest.spyOn(ReviewService, 'addReview').mockResolvedValue({
      userId: '5d349fe90460b663ab7edd16',
      carId: '5d3056128f1d3a2f5b0cc134',
      content: 'Great Car',
      _id: '5d3604aeda673df50e4827cc'
    });

    const wrapper = mount(CarDetails, {
      store,
      localVue,
      propsData: { carId: '5d3056128f1d3a2f5b0cc134' },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    await flushPromises();
    expect(wrapper.findAll('[data-test=review-preview]').length).toBe(2);

    wrapper.vm.saveReview({ content: 'Great Car' });

    await flushPromises();

    expect(wrapper.findAll('[data-test=review-preview]').length).toBe(3);
  });
});
