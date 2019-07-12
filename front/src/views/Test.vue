<template>
  <div class="about">
    <h1>This is a testing page for working with the Production Ready Server</h1>
    <h2>{{msg}}</h2>
    <input type="text" v-model="loginCred.email" placeholder="email">
    <br>
    <input type="text" v-model="loginCred.password" placeholder="password">
    <br>
    <button @click="doLogin">Login</button>
    <hr>

    <input type="text" v-model="signupCred.email" placeholder="email">
    <br>
    <input type="text" v-model="signupCred.password" placeholder="password">
    <br>
    <input type="text" v-model="signupCred.username" placeholder="username">
    <br>
    <button @click="doSignup">Signup</button>
    <hr>

    <button @click="doLogout">Logout</button>

    <button @click="getAllUsers">getAllUsers</button>
    <button @click="sendMsg">Send Msg</button>
    <hr>
    {{msgs}}

    <hr>

  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      loginCred: {},
      signupCred: {},
      msg: ''
    }
  },
  created() {
     this.$store.dispatch({type: 'chatJoin'})
  },
  computed: {
    msgs() {
      return this.$store.getters.msgs;
    }
  },
  methods: {
    doLogin() {
      const cred = this.loginCred
      if(!cred.email || !cred.password) return this.msg = 'Missing parameters'
      this.$store.dispatch({type :'login', userCred:cred})
    },
    doLogout() {
      this.$store.dispatch({type: 'logout'})
    },
    doSignup() {
      const cred = this.signupCred
      if(!cred.email || !cred.password ||!cred.username) return this.msg = 'Missing parameters'
      this.$store.dispatch({type: 'signup', userCred: cred})
    },
    getAllUsers() {
      this.$store.dispatch({type: 'getUsers'})
    },
    sendMsg() {
      this.$store.dispatch({type: 'sendMsg', txt: 'Msg to All'})
    }
  }
  
}
</script>