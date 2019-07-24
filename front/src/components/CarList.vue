<template>
  <div class="car-list">
    <car-preview v-for="car in cars" :key="car._id" :car="car" />
  </div>
</template>

<script>
import CarPreview from '@/components/CarPreview.vue';
export default {
  components: {
    CarPreview
  },
  props: {
    cars: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.car-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  grid-gap: 2rem;
}
</style>
