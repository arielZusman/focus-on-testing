<template>
  <section class="review-preview" v-if="review">
    <div class="review-content">
      {{ review.content }}
    </div>
    <template v-if="review.user">
      By Driver:
      <router-link :to="`/user/${review.user._id}`">
        {{ review.user.username }}
      </router-link>
    </template>
    For Car:
    <router-link :to="`/car/${review.car._id}`">
      {{ review.car.model }}
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    review: Object
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
