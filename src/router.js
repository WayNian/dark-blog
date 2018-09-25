import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

iView.LoadingBar.config({
  color: '#009688',
  failedColor: 'red',
  height: 2
});


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/', redirect: '/index'
    },{
      path: '/',
      component: () => import ('./views/MainPage.vue'),
        children: [
        {
          path: '/index', component: () => import ('./views/Index.vue'),
        },{
          path: '/blog-list', component: () => import ('./views/BlogList.vue'),
        },{
          path: '/message', component: () => import ('./views/Message.vue'),
        }, {
          path: '/tools',  component: () => import ('./views/Tools.vue'),
        },{
          path: '/about',  component: () => import ('./views/About.vue'),
        }]
    },{
      name: 'blog-info', path: '/blog-info/:uuid', component: () => import ('./views/BlogInfo.vue'),
    },{
      path: '/admin', component: () => import ('./views/admin/BlogAdmin.vue'),
      children: [
        {
          path: 'blog-data', component: () => import ('./views/admin/BlogData.vue'),
        },{
          path: 'create-blog', component: () => import ('./views/admin/CreateBlog.vue'),
        },{
          path: 'manage-blog', component: () => import ('./views/admin/ManageBlog.vue'),
        }
      ]
    },{
      path: "*", component: () => import ('./views/404.vue'),
    }]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish();
})

export default router