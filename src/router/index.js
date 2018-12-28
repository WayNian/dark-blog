import Vue from "vue";
import Router from "vue-router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import staticRoute from "./staticRoute";

Vue.use(iView);

iView.LoadingBar.config({
  color: "#009688",
  failedColor: "red",
  height: 2
});

Vue.use(Router);

const router = new Router({
  routes: staticRoute
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router;
