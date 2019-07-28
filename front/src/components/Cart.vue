<template>
  <div>
    <h1>My Cart</h1>
    <CartList></CartList>
  </div>
</template>

<script>
import CartList from '@/components/CartList';
export default {
  name: 'Cart',
  components: {
    CartList
  }
};
</script>

<style scoped></style>
