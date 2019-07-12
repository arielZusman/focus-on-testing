<template>
  <section class="user-detials">
        <h3 v-if="user">Reviews wrote by {{user.nickname}}</h3>
        <review-list 
        :reviews="reviews"
        @car-clicked="$router.push('/car/'+$event)" />
  </section>
</template>

<script>
import UserService from '@/services/UserService.js'
import ReviewList from '@/components/ReviewList.vue'
export default {
    data(){
        return {
            user: null,
            reviews : []
        }
    },
    watch:{
        '$route.params.id' :{
            handler(){
                var userId = this.$route.params.id
                UserService.getById(userId)
                    .then(({user, reviews}) => {
                        console.log({reviews})
                        this.user = user
                        this.reviews = reviews
                    })
            },
            immediate: true
        }
    },
    components:{ReviewList}
}
</script>

<style>
</style>
