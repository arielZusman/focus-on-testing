<template>
<section class="review-form">
    <h1>
        Review form
    </h1>
    <form @submit.prevent="saveReview">
        <textarea id="" cols="30" rows="10" v-model="content" placeholder="Your opinion matters.."/>
        <br/>
        <button>Publish</button>
    </form>
</section>
</template>

<script>
export default {
    data(){
        return {
            content:  ''
        }
    },
    methods:{
        saveReview(){
            this.$emit('save-review', {content: this.content})
            this.content = '';
        }
    }
}
</script>

<style>
.review-form {
    background-color: lightgoldenrodyellow;
    padding: 5px;
    text-align: center;
}
</style>
