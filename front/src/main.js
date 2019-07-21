import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let user = localStorage.getItem('loggedInUser');
    if (user) {
      user = JSON.parse(user);
      this.$store.commit('UserStore/SET_USER', user);
    }
  }
}).$mount('#app');
