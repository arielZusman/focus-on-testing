<template>
  <div class="home">
    <form @submit.prevent="login">
      <input v-model="typedNickname" type="text" />
      <button>login</button>
      <span v-if="isWorng"> worng credinatls</span>
    </form>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      typedNickname: "",
      isWorng: false
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({
          type: "login",
          user: {
            nickname: this.typedNickname
          }
        })
        .then(user => {
          if (!user) {
            this.isWorng = true;
          } else {
            this.isWorng = false;
          }
        });
    }
  }
};
</script>
