<template>
  <section
    class="car-detials"
    v-if="car"
  >
    <div
      class="full-width"
      :style="{ backgroundImage: `url(${car.img})` }"
    >
      <div class="bg-overlay">
        <h1 class="display-3 py-5 text-center text-white">
          {{ car.model }}
        </h1>
      </div>
    </div>

    <h1>Car Details 🚗</h1>

    <h2>Reviews</h2>
    <review-list :reviews="reviews" />

    <review-form
      v-if="$store.getters.isUserLoggedIn"
      @save-review="saveReview"
    />
    <router-link
      v-else
      to="/login"
    >
      Login to post your own reviews
    </router-link>
  </section>
</template>

<script>
import CarSerivce from "@/services/CarService.js";
import ReviewService from "@/services/ReviewService.js";
import ReviewList from "@/components/ReviewList.vue";
import ReviewForm from "@/components/ReviewForm.vue";
export default {
  props: ["id"],
  data() {
    return {
      car: null,
      reviews: []
    };
  },
  methods: {
    saveReview(review) {
      var fullReview = {
        ...review,
        carId: this.$route.params.id,
        userId: this.$store.getters.loggedInUser._id
      };
      ReviewService.addReview(fullReview).then(review => {
        this.reviews.push(review);
      });
    }
  },
  watch: {
    "$route.params.id": {
      handler() {
        var carId = this.$route.params.id;
        CarSerivce.getById(carId).then(({ car, reviews }) => {
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
