<template>
  <section class="bg-light px-5 py-3 ">
    <h1>
      Review form
    </h1>
    <form @submit.prevent="saveReview">
      <div class="form-group">
        <textarea
          class="form-control"
          cols="30"
          rows="5"
          v-model="content"
          placeholder="Your opinion matters.."
          data-test="review-form-content"
        />
      </div>
      <br />
      <button class="btn btn-primary" data-test="submit">
        Publish
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  methods: {
    saveReview() {
      this.$emit('save-review', { content: this.content });
      this.content = '';
    }
  }
};
</script>

<style></style>
