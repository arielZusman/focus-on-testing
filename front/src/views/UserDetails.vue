<template>
  <section class="user-detials">
    <h3 v-if="user">Reviews wrote by {{ user.username }}</h3>
    <review-list
      :reviews="reviews"
      @car-clicked="$router.push('/car/' + $event)"
    />
  </section>
</template>

<script>
import UserService from '@/services/UserService.js';
import ReviewList from '@/components/ReviewList.vue';
export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: null,
      reviews: []
    };
  },
  watch: {
    userId: {
      handler() {
        UserService.getById(this.userId).then(({ user, reviews }) => {
          this.user = user;
          this.reviews = reviews;
        });
      },
      immediate: true
    }
  },
  components: { ReviewList }
};
</script>

<style></style>
