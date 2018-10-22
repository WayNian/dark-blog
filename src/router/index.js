import Vue from "vue";
import Router from "vue-router";
import {
  Icon,
  Button,
  Layout,
  Header,
  Sider,
  Content,
  Card,
  CellGroup,
  Cell,
  Menu,
  MenuItem,
  LoadingBar,
  FormItem,
  Input,
  Message,
  Modal,
  Tag,
  Form,
  CheckboxGroup,
  Checkbox,
} from "iview";
import "iview/dist/styles/iview.css";
import staticRoute from "./staticRoute";

Vue.component("Icon", Icon);
Vue.component("Button", Button);
Vue.component("Layout", Layout);
Vue.component("Header", Header);
Vue.component("Sider", Sider);
Vue.component("Content", Content);
Vue.component("Card", Card);
Vue.component("CellGroup", CellGroup);
Vue.component("Cell", Cell);
Vue.component("Menu", Menu);
Vue.component("MenuItem", MenuItem);
Vue.component("LoadingBar", LoadingBar);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Modal", Modal);
Vue.component("Tag", Tag);
Vue.component("CheckboxGroup", CheckboxGroup);
Vue.component("Checkbox", Checkbox);

LoadingBar.config({
  color: "#009688",
  failedColor: "red",
  height: 2
});

Vue.prototype.$Message = Message 
Vue.use(Router);

const router = new Router({
  routes: staticRoute
});

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

router.afterEach(() => {
  LoadingBar.finish();
});

export default router;
