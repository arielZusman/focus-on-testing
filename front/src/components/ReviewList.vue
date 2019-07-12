<template>
    <ul class="review-list">
        <li class="review-list-item" v-for="review in reviews" :key="review._id">
            <review-preview
                @user-clicked="$emit('user-clicked',review.userId)"
                @car-clicked="$emit('car-clicked',review.carId)"
                :review="review"
            />
        </li>
    </ul>
</template>

<script>
import ReviewPreview from '@/components/ReviewPreview'
export default {
props: {
    reviews: Array
},
components: {
    ReviewPreview
}
}
</script>

<style>

</style>
