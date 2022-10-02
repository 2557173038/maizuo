import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, //this.$router===router
  store, //this.$store===store
  render: h => h(App)
}).$mount('#app')

// const obj = {
//   name: 'kerwin',
//   age: 100
// }
// console.log(obj)
