// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueResource from 'vue-resource'

Vue.config.debug = true;
Vue.use(VueResource);
Vue.http.options.emulateHTTP = true;

new Vue({
  el: '#appIndex',
  router,
  render: h =>h(App)
})
