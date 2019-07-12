<template>
  <ul class="car-list">
    <li v-for="car in cars"
        :key="car._id">
        <car-preview :car="car" />
        <router-link :to="'car/'+car._id" >
            Car Details 🚗
        </router-link>
    </li>
  </ul>
</template>

<script>
import CarPreview from '@/components/CarPreview.vue'
export default {
    props: {
        cars: Array
    },
    components: {
        CarPreview
    }
}
</script>

<style lang="scss" scoped>
.car-list {
	display: flex;
	list-style: none;
}
.car-list > li {
	border: 1px solid gray;
    padding: 5px;
    margin: 5px;
    transition: .5s;
    &:hover {
        background-color: lightblue;
    }
}
</style>

