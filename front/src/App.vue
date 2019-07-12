<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>| 
      <router-link to="/car">Cars</router-link> |
      <span v-if="$store.getters.isUserLoggedIn">
        Hi {{$store.getters.loggedInUser.nickname}}
      </span>
      <router-link v-else to="/">Login</router-link>
    
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
