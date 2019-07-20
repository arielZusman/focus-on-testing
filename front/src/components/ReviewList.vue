<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="review in reviews"
      :key="review._id"
    >
      <review-preview
        :review="review"
      />
    </li>
  </ul>
</template>

<script>
import ReviewPreview from '@/components/ReviewPreview'
export default {
props: {
    reviews: Array
},
components: {
    ReviewPreview
}
}
</script>

<style>

</style>
