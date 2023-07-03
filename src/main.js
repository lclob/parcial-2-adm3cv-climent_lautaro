import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/styles.css';

// vue router
import VueRouter from 'vue-router'
import router from './router/router'
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
