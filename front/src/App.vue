<template>
  <div id="app">
    <AppHeader />
    <div class="container py-3">
      <div class="row">
        <router-view class="col-9 border-right" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  components: {
    AppHeader
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
