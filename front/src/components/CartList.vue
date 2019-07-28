<template>
  <ul v-if="cart" class="list-group list-group-flush">
    <li
      v-for="(item, id) in cart"
      :key="id"
      class="list-group-item d-flex justify-content-between align-items-center"
      data-test="cart-item"
    >
      {{ item.model }}
      <span class="badge badge-primary badge-pill">{{ item.count }}</span>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('UserStore');
export default {
  name: 'CartList',
  computed: {
    ...mapState(['cart'])
  }
};
</script>

<style scoped></style>
