<template>
  <section v-if="review" class="review-preview" data-test="review-preview">
    <div class="review-content" data-test="review-content">
      {{ review.content }}
    </div>
    <template v-if="review.user">
      By Driver:
      <router-link :to="`/user/${review.user._id}`" data-test="review-user">
        {{ review.user.username }}
      </router-link>
    </template>
    For Car:
    <router-link :to="`/car/${review.car._id}`" data-test="review-model">
      {{ review.car.model }}
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.review-preview {
  background-color: lightgreen;
  padding: 5px;
  margin: 5px;
}
.review-content {
  font-size: 1.6em;
}
</style>
