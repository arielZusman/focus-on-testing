<template>
  <div class="car-list">
    <car-preview
      :car="car"
      v-for="car in cars"
      :key="car._id"
    />
  </div>
</template>

<script>
import CarPreview from "@/components/CarPreview.vue";
export default {
  props: {
    cars: {
      type: Array,

      default: () => []
    }
  },
  components: {
    CarPreview
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
