<template>
  <section class="car-page">
    <car-list :cars="cars" />
  </section>
</template>

<script>
import CarList from '@/components/CarList.vue';

import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('CarsStore');
export default {
  components: {
    CarList
  },
  computed: {
    ...mapState(['cars'])
  },
  created() {
    this.loadCars();
  },
  methods: {
    ...mapActions(['loadCars'])
  }
};
</script>

<style></style>
