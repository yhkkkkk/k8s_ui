import { createApp } from "vue";
// 引入App.vue主组件
import App from "./App.vue";
// 引入element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入图标视图
import * as ELIcons from "@element-plus/icons-vue";
// 引入路由配置及规则
import router from "./router";
import store from "./store";

// 创建vue实例
const app = createApp(App);

// 将图标注册为全局组件
for (let iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName]);
}

// 引入element plus
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
