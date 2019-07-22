<template>
  <section class="card" data-test="car-details">
    <img :src="car.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="card-title">
        <strong>{{ car.model }}</strong> - ${{ car.price }}
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <router-link
          :to="'car/' + car._id"
          class="btn btn-outline-primary stretched-link"
        >
          🚗 Car Details
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      required: true
    }
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
