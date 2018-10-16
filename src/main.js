import Vue from "vue";
import mavonEditor from "mavon-editor"; // markdwon
import "mavon-editor/dist/css/index.css";
import animate from "animate.css";
import hightLight from "./utils/highlight";
import { get, post } from "./http";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./assets/icon/iconfont.css";

Vue.use(mavonEditor);
Vue.use(hightLight);
Vue.use(animate);
Vue.config.productionTip = false;

Vue.prototype.$http = {
  get,
  post
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
