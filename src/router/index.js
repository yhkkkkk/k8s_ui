import { createRouter, createWebHashHistory } from "vue-router";
// 导入进度条组件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 导入layout
import Layout from "@/layout/Layout.vue";

const routes = [
  {
    path: '/login',  //url路径
    component: () => import('@/views/login/Login.vue'),  //视图组件
    icon: "odometer",  //图标
    meta: {title: "登录", requireAuth: false},  //meta元信息
  },
  {
    path: "/", //视图
    redirect: "/home",
  },
  {
    path: '/home',
    component: Layout,
    icon: "odometer",
    children: [
      {
        path: "/home",
        name: "概要",
        icon: "odometer",
        meta: {title: "概要", requireAuth: true},
        component: () => import('@/views/home/Home.vue'),
      }
    ]
  },
  {
    path: '/workflow',
    component: Layout,
    icon: "VideoPlay",
    children: [
      {
        path: "/workflow",
        name: "工作流",
        icon: "VideoPlay",
        meta: {title: "工作流", requireAuth: true},
        component: () => import('@/views/workflow/Workflow.vue')
      }
    ]
  },
  {
    path: "/cluster",
    name: "集群",
    component: Layout,
    icon: "home-filled",
    meta: {
      title: "集群",
      requireAuth: true
    },
    children: [
      {
        path: "/cluster/node",
        name: "Node",
        icon: "el-icon-s-data",
        meta: {
          title: "Node",
          requireAuth: true
        },
        component: () => import("@/views/node/Node.vue")
      },
      {
        path: "/cluster/namespace",
        name: "Namespace",
        icon: "el-icon-document-add",
        meta: {
          title: "Namespace",
          requireAuth: true
        },
        component: () => import("@/views/namespace/Namespace.vue")
      },
      {
        path: "/cluster/persistentvolume",
        name: "PersistentVolume",
        icon: "el-icon-document-add",
        meta: {title: "PersistemtVolume", requireAuth: true},
        component: () => import("@/views/persistentvolume/PersistentVolume.vue")
      }
    ]
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
    path: "/loadbalance",
    name: "负载均衡",
    component: Layout,
    icon: "files",
    meta: {title: "负载均衡", requireAuth: true},
    children: [
      {
        path: "/loadbalance/service",
        name: "Service",
        icon: "el-icon-s-data",
        meta: {title: "Service", requireAuth: true},
        component: () => import("@/views/service/Service.vue")
      },
      {
        path: "/loadbalance/ingress",
        name: "Ingress",
        icon: "el-icon-document-add",
        meta: {title: "Ingress", requireAuth: true},
        component: () => import("@/views/ingress/Ingress.vue")
      }
    ]
  },
  {
    path: "/storage",
    name: "存储与配置",
    component: Layout,
    icon: "tickets",
    meta: {title: "存储与配置", requireAuth: true},
    children: [
      {
        path: "/storage/configmap",
        name: "Configmap",
        icon: "el-icon-document-add",
        meta: {title: "Configmap", requireAuth: true},
        component: () => import("@/views/configmap/ConfigMap.vue")
      },
      {
        path: "/storage/secret",
        name: "Secret",
        icon: "el-icon-document-add",
        meta: {title: "Secret", requireAuth: true},
        component: () => import("@/views/secret/Secret.vue")
      },
      {
        path: "/storage/persistentvolumeclaim",
        name: "PersistentVolumeClaim",
        icon: "el-icon-s-data",
        meta: {title: "PersistentVolumeClaim", requireAuth: true},
        component: () => import("@/views/persistentvolumeclaim/PersistentVolumeClaim.vue")
      },
    ]
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
    path: '/403',
    component: () => import('@/views/common/403.vue'),
    meta: {
      title: '403'
    }
  },
  //其他路径跳转至404页面
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

NProgress.inc(100); // 进度条递增
NProgress.configure({ easing: "ease", speed: 500, showSpinner: true }); // 动画效果、动画速度、进度环

// 路由守卫(拦截)
// to 要去到某个页面的属性
// from 从哪个页面来的属性
// next 处理路由跳转及放行
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

router.afterEach(() => {
  // 关闭进度条
  NProgress.done();
});

// 抛出路由实例,在main.js中引用
export default router;
