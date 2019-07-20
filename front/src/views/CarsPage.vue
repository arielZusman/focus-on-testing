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
  created() {
    this.loadCars();
  },
  computed: {
    ...mapState(['cars'])
  },
  methods: {
    ...mapActions(['loadCars'])
  },
  components: {
    CarList
  }
};
</script>

<style></style>
