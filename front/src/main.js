import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    var user = localStorage.getItem('loggedInUser')
    if (user) {
      user = JSON.parse(user)
      this.$store.commit({type: 'setUser', user})
    }
  }
}).$mount('#app')
