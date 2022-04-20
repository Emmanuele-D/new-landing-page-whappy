import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'




Vue.config.productionTip = false

Vue.use(VueMeta, {
  keyName: 'head'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
