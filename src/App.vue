<template>
  <!--路由占位符,会导入匹配到的$route.path的视图组件-->
  <router-view></router-view>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑",serif;
}
#noprogress .bar {
  /* 自定义进度条 */
  background: #2186c0 !important;
}
</style>
