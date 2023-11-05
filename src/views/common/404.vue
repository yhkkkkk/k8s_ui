<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<template>
    <div class="main-body-div">
        <el-row>
          <!-- 图片 -->
          <el-col :span="24">
            <div>
              <img class="main-body-img" src="../../assets/images/404.png">
            </div>
          </el-col>
          <!-- 描述 -->
          <el-col :span="24">
            <div>
              <h1 class="status-code">404...</h1>
              <h2 class="status-describe">页面未找到...</h2>
              <h3 class="status-describe">请检查URL是否正确...</h3>
            </div>
          </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
/*图片属性*/
.main-body-img {
  width: 45%;
  height: 45%;
  margin-top: 150px;
}
/*整体属性*/
.main-body-div {
  text-align: center;
  height: 100vh;
  width: 100vw;
}
/*状态码*/
.status-code {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 100px;
  color: rgb(54, 95, 230);
  font-weight: bold;
}
/*描述*/
.status-describe {
  font-size: 20px;
  color: rgb(54, 95, 230);
  font-weight: bold;
}
</style>
