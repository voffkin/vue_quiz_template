import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$isMob = window.matchMedia(`only screen and (max-width: 900px)`).matches
Vue.prototype.$server = process.env.BASE_URL;

new Vue({
  render: h => h(App),
}).$mount('#app')
