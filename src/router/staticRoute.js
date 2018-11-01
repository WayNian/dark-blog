const staticRoute = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/",
    component: () => import("../views/MainPage.vue"),
    children: [
      {
        path: "/index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/blog-list",
        component: () => import("../views/BlogList.vue")
      },
      {
        path: "/message",
        component: () => import("../views/Message.vue")
      },
      {
        path: "/tools",
        component: () => import("../views/Tools.vue")
      },
      {
        path: "/about",
        component: () => import("../views/About.vue")
      }
    ]
  },
  {
    name: "blog-info",
    path: "/blog-info/:id",
    component: () => import("../views/BlogInfo.vue")
  },
  {
    path: "/admin/blog-data",
    component: () => import("../views/admin/BlogAdmin.vue"),
    children: [
      {
        path: "/admin/blog-data",
        component: () => import("../views/admin/BlogData.vue")
      },
      {
        path: "/admin/create-blog",
        component: () => import("../views/admin/CreateBlog.vue")
      },
      {
        path: "/admin/manage-blog",
        component: () => import("../views/admin/ManageBlog.vue")
      }
    ]
  },
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];

export default staticRoute;
