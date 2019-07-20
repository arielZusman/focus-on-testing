<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
    <router-link to="/" class="navbar-brand">
      <img src="@/assets/logo.png" alt="" width="30" height="30" />
    </router-link>
    <ul class="navbar-nav mr-auto">
      <router-link tag="li" to="/" class="nav-item">
        <a class="nav-link">Home</a>
      </router-link>
    </ul>
    <ul class="navbar-nav">
      <template v-if="user">
        <div class="navbar-text mr-1">Hi {{ user.username }}</div>
        <div class="navbar-item">
          <button class="btn btn-warning" @click="logout">
            Logout
          </button>
        </div>
      </template>
      <div class="navbar-item" v-else>
        <router-link class="btn btn-primary" to="/login">
          <strong>Log in</strong>
        </router-link>
      </div>
    </ul>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("UserStore");
export default {
  name: "AppHeader",
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>

<style scoped></style>
