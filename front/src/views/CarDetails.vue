<template>
  <section class="car-detials">
    <h1>Car Details 🚗</h1>
    
    <pre>{{car}}</pre>
    <h2>Reviews</h2>
    <review-list :reviews="reviews" />
    
    <review-form v-if="$store.getters.isUserLoggedIn" @save-review="saveReview" />
    <router-link v-else to="/">Login to post your own reviews</router-link>
  </section>
</template>

<script>
import CarSerivce from '@/services/CarService.js'
import ReviewService from '@/services/ReviewService.js'
import ReviewList from '@/components/ReviewList.vue'
import ReviewForm from '@/components/ReviewForm.vue'
export default {
    data(){
        return {
            car: null,
            reviews : []
        }
    },
    methods: {
        saveReview(review){
            var fullReview = {
                ...review,
                carId : this.$route.params.id,
                userId : this.$store.getters.loggedInUser._id
            }
            ReviewService.addReview(fullReview)
                .then(review => {
                    this.reviews.push(review)
                })
        }
    },
    watch:{
        '$route.params.id' :{
            handler(){
                var carId = this.$route.params.id
                CarSerivce.getById(carId)
                    .then(({car, reviews}) => {
                        this.car = car
                        this.reviews = reviews
                    })
            },
            immediate: true
        }
    },
    components: {
        ReviewList,
        ReviewForm
    }
}
</script>

<style>
</style>
