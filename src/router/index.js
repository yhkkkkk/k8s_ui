import { createRouter, createWebHashHistory } from "vue-router";
// 导入进度条组件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 导入layout
import Layout from "@/layout/Layout.vue";

const routes = [
  {
    path: "/", //视图
    redirect: "/home",
  },
  {
    path: "/home",
    name: "概要",
    icon: "odometer",
    meta: {
      title: "概要",
      requireAuth: false,
    }, //定义meta元数据
    component: Layout,
    children: [
      {
        path: "/home",
        name: "概要",
        icon: "odometer",
        meta: {
          title: "概要",
          requireAuth: false,
        }, //定义meta元数据
        component: () => import("@/views/home/Home.vue"),
      },
    ],
  },
  {
    path: "/workload",
    name: "工作负载",
    component: Layout,
    icon: "menu",
    meta: { title: "工作负载", requireAuth: false },
    children: [
      {
        path: "/workload/deployment",
        name: "Deployment",
        icon: "el-icon-s-data",
        meta: {
          title: "Deployment",
          requireAuth: true,
        },
        component: () => import("@/views/deployment/Deployment.vue"),
      },
      {
        path: "/workload/pod",
        name: "Pod",
        icon: "el-icon-document-add",
        meta: {
          title: "Pod",
          requireAuth: true,
        },
        component: () => import("@/views/pod/Pod.vue"),
      },
      {
        path: "/workload/deamonset",
        name: "DaemonSet",
        icon: "el-icon-document-add",
        meta: {
          title: "DaemonSet",
          requireAuth: true,
        },
        component: () => import("@/views/daemonset/DaemonSet.vue"),
      },
      {
        path: "/workload/statefulset",
        name: "StatefulSet",
        icon: "el-icon-document-add",
        meta: {
          title: "DaemonSets",
          requireAuth: true,
        },
        component: () => import("@/views/statefulset/StatefulSet.vue"),
      },
    ],
  },
  {
    path: "/404", //视图
    meta: {
      title: "404",
      requireAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/common/404.vue"),
  },
  {
    path: "/:pathMatch(.*)", //视图
    redirect: "/404",
  },
];

// 创建路由实例
const router = createRouter({
  // hash模式: createWebHashHistory()
  // history模式: createWebHistory()
  history: createWebHashHistory(),
  routes,
});

NProgress.inc(0.2); // 进度条递增
NProgress.configure({ easing: "ease", speed: 500, showSpinner: true }); // 动画效果、动画速度、进度环

// 路由守卫(拦截)
router.beforeEach((to, from, next) => {
  // 进度条开始
  NProgress.start();
  // 设置头部
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "kubernetes";
  }
  // 放行
  next();
  // 判断是否需要登录
  // if (to.meta.requireAuth) {
  //   // 判断是否登录
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     // 未登录
  //     next({
  //       path: "/login",
  //       query: { redirect: to.fullPath },
  //     });
  //   } else {
  //     // 已登录
  //     next();
  //   }
  // } else {
  //   // 不需要登录
  //   next();
  // }
});

// 关闭进度条
router.afterEach(() => {
  NProgress.done();
});

// 抛出路由实例,在main.js中引用
export default router;
