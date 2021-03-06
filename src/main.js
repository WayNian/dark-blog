import "babel-polyfill";
import Vue from "vue";
import mavonEditor from "mavon-editor"; // markdwon
import "mavon-editor/dist/css/index.css";
import animate from "animate.css";
import hightLight from "./utils/highlight";
import App from "./App.vue";
import router from "./router/";
import store from "./store/index";
import "./assets/icon/iconfont.css";

Vue.use(mavonEditor);
Vue.use(hightLight);
Vue.use(animate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
