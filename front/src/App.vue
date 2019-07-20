<template>
  <div id="app">
    <AppHeader />
    <router-view class="container py-3" />
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';

  export default {
    components: {
      AppHeader
    }
  }
</script>
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
