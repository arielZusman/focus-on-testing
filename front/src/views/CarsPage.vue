<template>
<section class="car-page">
    <car-list :cars="cars" />
</section>
</template>

<script>
import CarSerivce from '@/services/CarService.js'
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
