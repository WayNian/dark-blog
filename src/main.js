import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css'

Vue.use(animate);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
