<template>
  <div id="app">
    <AppHeader />
    <div class="container py-3">
      <div class="row">
        <router-view class="col-9 border-right" />
        <Cart class="col-3"></Cart>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import Cart from '@/components/Cart';

export default {
  components: {
    AppHeader,
    Cart
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
