import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/axios'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
