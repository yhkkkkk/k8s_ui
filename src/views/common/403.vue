<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<template>
    <div class="main-body-div">
        <el-row>
          <!-- 图片 -->
          <el-col :span="24">
            <div>
              <img class="main-body-img" src="../../assets/images/403.png" alt="">
            </div>
          </el-col>
          <!-- 描述 -->
          <el-col :span="24">
            <div>
              <h1 class="status-code">403</h1>
              <h2 class="status-describe">你暂时无权限访问该页面...</h2>
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
  margin-top: 15%;
}
/*整体属性*/
.main-body-div {
  text-align: center;
  height: 100vh;
  width: 100vw;
}
/*状态码*/
.status-code {
  margin: 20px 0 20px 0;
  font-size: 100px;
  color: rgb(54, 95, 230);
  font-weight: bold;
}
/*描述*/
.status-describe {
  font-size: 20px;
  color: rgb(145, 143, 143);
  font-weight: bold;
}
</style>
