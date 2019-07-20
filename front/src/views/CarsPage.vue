<template>
  <section class="car-page">
    <car-list :cars="cars" />
  </section>
</template>

<script>
import CarList from '@/components/CarList.vue'

export default {
    created() {
        this.$store.dispatch({type: 'loadCars'})
    },
    computed:{
        cars(){
            return this.$store.getters.carsToDisplay
        }
    },
    components: {
        CarList
    }
}
</script>

<style>

</style>
