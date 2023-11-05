const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    port: 80,
    open: true, //启动后是否自动打开网页
  },
});
