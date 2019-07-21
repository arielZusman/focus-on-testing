<template>
  <section class="car-detials" v-if="car">
    <div class="full-width" :style="{ backgroundImage: `url(${car.img})` }">
      <div class="bg-overlay">
        <h1 class="display-3 py-5 text-center text-white">
          {{ car.model }}
        </h1>
      </div>
    </div>
    <div class="pt-4">
      <h1>Car Details 🚗</h1>

      <h2>Reviews</h2>
      <review-list :reviews="reviews" />
      <hr />
      <review-form v-if="user" @save-review="saveReview" />
      <router-link v-else to="/login">
        Login to post your own reviews
      </router-link>
    </div>
  </section>
</template>

<script>
import CarService from '@/services/CarService.js';
import ReviewService from '@/services/ReviewService.js';
import ReviewList from '@/components/ReviewList.vue';
import ReviewForm from '@/components/ReviewForm.vue';

import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('UserStore');
export default {
  props: {
    carId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      car: null,
      reviews: []
    };
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async saveReview(review) {
      const fullReview = {
        ...review,
        carId: this.carId,
        userId: this.user._id
      };
      let reviewResponse = await ReviewService.addReview(fullReview);

      reviewResponse.car = this.car;
      reviewResponse.user = this.user;

      this.reviews.push(reviewResponse);
    }
  },
  watch: {
    carId: {
      handler() {
        CarService.getById(this.carId).then(({ car, reviews }) => {
          this.car = car;
          this.reviews = reviews;
        });
      },
      immediate: true
    }
  },
  components: {
    ReviewList,
    ReviewForm
  }
};
</script>

<style scoped>
.full-width {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -1rem;
  padding-top: 56%;
}
.bg-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
