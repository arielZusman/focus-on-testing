<template>
  <ul class="list-group">
    <li v-for="review in reviews" :key="review._id" class="list-group-item">
      <review-preview :review="review" />
    </li>
  </ul>
</template>

<script>
import ReviewPreview from '@/components/ReviewPreview';
export default {
  components: {
    ReviewPreview
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
