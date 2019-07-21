<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="review in reviews" :key="review._id">
      <review-preview :review="review" />
    </li>
  </ul>
</template>

<script>
import ReviewPreview from '@/components/ReviewPreview';
export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  components: {
    ReviewPreview
  }
};
</script>

<style></style>
