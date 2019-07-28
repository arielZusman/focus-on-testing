/* eslint-env jest */
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import CarPreview from '@/components/CarPreview';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

let state, store, actions;

describe('CarPreview.vue', () => {
  beforeEach(() => {
    state = {
      user: null,
      cart: {}
    };

    actions = {
      addToCart: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        UserStore: {
          namespaced: true,
          state,
          actions
        }
      }
    });
  });

  it('click on Add button should dispatch action with car details', async () => {
    const car = {
      _id: '5d3056128f1d3a2f5b0cc134',
      model: 'Alfa Romeo Stelvio',
      img:
        'https://pictures.topspeed.com/IMG/crop/201905/alfa-romeo-stelvio-f-2_1600x0w.jpg',
      price: 42990
    };
    const wrapper = shallowMount(CarPreview, {
      store,
      localVue,
      propsData: {
        car
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    wrapper.find('[data-test=add-to-cart]').trigger('click');

    expect(actions.addToCart).toHaveBeenCalled();
  });
});
