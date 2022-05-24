import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
import StarRating from 'vue-star-rating';



Vue.component('lang-flag', LangFlag);
Vue.component('star-rating', StarRating);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
