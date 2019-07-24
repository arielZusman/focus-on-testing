<template>
  <section class="card" data-test="car-details">
    <img :src="car.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="card-title">
        <strong data-test="car-model">{{ car.model }}</strong> - ${{
          car.price
        }}
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <router-link :to="'car/' + car._id" class="btn btn-outline-primary">
          🚗 Car Details
        </router-link>
        <button
          class="btn btn-primary"
          data-test="add-to-cart"
          @click="addToCart(car)"
        >
          Add
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('UserStore');

export default {
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
};
</script>

<style scoped>
.card-img-top {
  max-height: 180px;
  height: 100%;
  width: 100%;
}
</style>
