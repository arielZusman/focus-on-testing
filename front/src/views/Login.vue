<template>
  <section>
    <div class="row">
      <div class="col-4 offset-4">
        <h1 class="text-center">
          {{ title }}
        </h1>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="userCred.email"
            placeholder="email"
            data-test="email"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="userCred.password"
            placeholder="password"
            data-test="password"
          />
        </div>
        <div class="form-group" v-if="!isLogin">
          <input
            class="form-control"
            type="text"
            v-model="userCred.username"
            placeholder="username"
            data-test="username"
          />
        </div>

        <p v-if="msg" class="text-danger text-center" data-test="login-error">
          {{ msg }}
        </p>

        <div class="field">
          <div class="control">
            <button
              class="btn btn-primary btn-block"
              @click="submit"
              :disabled="isSubmitDisabled"
              data-test="submit"
            >
              {{ title }}
            </button>
          </div>
        </div>
        <p data-test="switch-text">
          {{ switchText }}
          <button
            class="btn btn-link"
            @click="switchForms"
            data-test="switch-form"
          >
            {{ switchTitle }}
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('UserStore');

export default {
  name: 'Login',
  data() {
    return {
      userCred: {
        email: null,
        password: null,
        username: null
      },
      msg: '',
      isLogin: true
    };
  },
  computed: {
    title() {
      return this.isLogin ? 'Login' : 'Sign Up';
    },
    switchTitle() {
      return !this.isLogin ? 'Login' : 'Sign Up';
    },
    switchText() {
      return this.isLogin
        ? "Don't have an account ?"
        : 'Already have an account ?';
    },
    isSubmitDisabled() {
      const isLoginDisabled = !(this.userCred.email && this.userCred.password);

      return this.isLogin
        ? isLoginDisabled
        : isLoginDisabled || !this.userCred.username;
    }
  },
  methods: {
    ...mapActions(['login', 'signup']),
    async submit() {
      try {
        this.isLogin
          ? await this.login(this.userCred)
          : await this.signup(this.userCred);

        this.$router.push('/');
      } catch (e) {
        this.msg = e.response.data.error;
      }
    },
    switchForms() {
      this.userCred = {
        email: null,
        password: null,
        username: null
      };
      this.isLogin = !this.isLogin;
    }
  }
};
</script>
