<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <!--    <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
    <ul class="navbar-nav mr-auto">
      <router-link
        tag="li"
        to="/"
        class="nav-item"
      >
        <a class="nav-link">Home</a>
      </router-link>
    </ul>
    <ul class="navbar-nav">
      <template v-if="user">
        <div class="navbar-text mr-1">
          Hi {{ user.username }}
        </div>
        <div class="navbar-item">
          <button
            class="btn btn-warning"
            @click="doLogout"
          >
            Logout
          </button>
        </div>
      </template>
      <div
        class="navbar-item"
        v-else
      >
        <router-link
          class="btn btn-primary"
          to="/login"
        >
          <strong>Log in</strong>
        </router-link>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    user() {
      return this.$store.getters.isUserLoggedIn
        ? this.$store.state.UserStore.user
        : null;
    }
  },
  methods: {
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    }
  }
};
</script>

<style scoped></style>
