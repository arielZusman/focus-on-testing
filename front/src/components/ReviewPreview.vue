<template>
    <section class="review-preview">
        <!-- {{review}} -->

        <div class="review-content">
            {{review.content}}
        </div>
        By Driver: <router-link :to="`/user/${review.user._id}`">{{review.user.nickname}}</router-link>
        For Car: <router-link :to="`/car/${review.car._id}`">{{review.car.vendor}}</router-link>
    </section>
</template>

<script>
export default {
    props: {
        review : Object
    }
}
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
