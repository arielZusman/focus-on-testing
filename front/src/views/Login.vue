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
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="userCred.password"
            placeholder="password"
          />
        </div>
        <div class="form-group" v-if="!isLogin">
          <input
            class="form-control"
            type="text"
            v-model="userCred.username"
            placeholder="username"
          />
        </div>
        <div class="field">
          <div class="control">
            <button
              class="btn btn-primary btn-block"
              @click="submit"
              :disabled="isSubmitDisabled"
            >
              {{ title }}
            </button>
          </div>
        </div>
        <p>
          {{ switchText }}
          <button class="btn btn-link" @click="switchForms">
            {{ switchTitle }}
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
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
  created() {},
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
    async submit() {
      const type = this.isLogin ? 'login' : 'signup';
      await this.$store.dispatch({ type, userCred: this.userCred });
      this.$router.back();
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
