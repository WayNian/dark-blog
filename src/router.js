import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//通过 ease (一个 CSS 中的 easing 值) 调整动画设置和速度 speed （毫秒ms
//想禁用进度环？设置 showSpinner 为 false
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: () =>
      import ('./views/MainPage.vue'),
    children: [{
      path: '',
      component: () =>
        import ('./views/BlogList.vue'),
    },{
      path: '/blog-info',
      component: () =>
        import ('./views/BlogInfo.vue'),
    }, {
      path: '/about',
      component: () =>
        import ('./views/About.vue'),
    }, {
      path: '/link',
      component: () =>
        import ('./views/Links.vue'),
    }]
  },{
    path: '/admin/manage',
    component: () =>
      import ('./views/admin/ManageBlog.vue'),
  }]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router