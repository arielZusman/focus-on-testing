/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Vuex from 'vuex';
import Login from '@/views/Login';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Login.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    actions = {
      login: jest.fn(),
      signup: jest.fn()
    };

    state = {
      user: null
    };
    store = new Vuex.Store({
      modules: {
        UserStore: {
          namespaced: true,
          actions,
          state
        }
      }
    });
  });

  it('should render', () => {
    const wrapper = shallowMount(Login, { store, localVue });

    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('should display correct text on switch button', () => {
    const wrapper = shallowMount(Login, { store, localVue });

    const switchFormBtn = wrapper.find('[data-test=switch-form]');

    expect(switchFormBtn.text()).toBe('Sign Up');

    switchFormBtn.trigger('click');

    expect(switchFormBtn.text()).toBe('Login');
  });

  it('should display correct switch text', () => {
    const wrapper = shallowMount(Login, { store, localVue });

    const switchFormText = wrapper.find('[data-test=switch-text]');

    expect(switchFormText.text()).toContain("Don't have an account ?");

    wrapper.find('[data-test=switch-form]').trigger('click');

    expect(switchFormText.text()).toContain('Already have an account ?');
  });

  it('should display input fields for login', function() {
    const wrapper = shallowMount(Login, { store, localVue });

    const inputFilelds = wrapper.findAll('input');

    expect(inputFilelds.length).toBe(2);
  });

  it('should display input fields for sign up', () => {
    const wrapper = shallowMount(Login, { store, localVue });

    const switchBtn = wrapper.find('[data-test=switch-form]');

    switchBtn.trigger('click');

    const inputFilelds = wrapper.findAll('input');
    expect(inputFilelds.length).toBe(3);
  });

  it('login form - submit button should be enabled when all inputs have value', () => {
    const wrapper = shallowMount(Login, { store, localVue });

    const submitBtn = wrapper.find('[data-test=submit]');

    expect(submitBtn.attributes('disabled')).toBe('disabled');

    wrapper.find('[data-test=email]').setValue('puki.muki@test.com');
    wrapper.find('[data-test=password]').setValue('123456');

    expect(submitBtn.attributes('disabled')).toBe(undefined);
  });

  it('submit form - submit button should be enabled when all inputs have value', () => {
    const wrapper = shallowMount(Login, { store, localVue });

    wrapper.find('[data-test=switch-form]').trigger('click');

    const submitBtn = wrapper.find('[data-test=submit]');

    expect(submitBtn.attributes('disabled')).toBe('disabled');

    wrapper.find('[data-test=email]').setValue('puki.muki@test.com');
    wrapper.find('[data-test=password]').setValue('123456');
    wrapper.find('[data-test=username]').setValue('Puki Muki');

    expect(submitBtn.attributes('disabled')).toBe(undefined);
  });

  it('login form - should call login function', async () => {
    // mock login action resolve
    actions.login.mockResolvedValue(true);

    // mock router push function
    const $router = {
      push: jest.fn()
    };

    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: { $router }
    });

    wrapper.find('[data-test=email]').setValue('puki.muki@test.com');
    wrapper.find('[data-test=password]').setValue('123456');

    wrapper.find('[data-test=submit]').trigger('click');

    await flushPromises();
    expect(actions.login).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalled();
  });

  it('sign up form - should call login function', async () => {
    // mock login action resolve
    actions.signup.mockResolvedValue(true);

    // mock router push function
    const $router = {
      push: jest.fn()
    };

    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: { $router }
    });

    wrapper.find('[data-test=switch-form]').trigger('click');

    wrapper.find('[data-test=email]').setValue('puki.muki@test.com');
    wrapper.find('[data-test=password]').setValue('123456');
    wrapper.find('[data-test=username]').setValue('Puki Muki');

    wrapper.find('[data-test=submit]').trigger('click');

    await flushPromises();
    expect(actions.signup).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalled();
  });

  it('should display error msg when submit fails', async () => {
    // mock login action reject
    actions.login.mockRejectedValue({
      response: {
        data: {
          error: 'error msg'
        }
      }
    });

    // mock router push function
    const $router = {
      push: jest.fn()
    };

    const wrapper = shallowMount(Login, {
      store,
      localVue,
      mocks: { $router }
    });

    wrapper.find('[data-test=email]').setValue('puki.muki@test.com');
    wrapper.find('[data-test=password]').setValue('123456');

    wrapper.find('[data-test=submit]').trigger('click');

    await flushPromises();
    expect(actions.login).toHaveBeenCalled();
    expect($router.push).not.toHaveBeenCalled();
    expect(wrapper.find('[data-test=login-error]').text()).toBe('error msg');
  });
});
