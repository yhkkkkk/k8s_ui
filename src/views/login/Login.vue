<template>
  <div class="header">
    <div class="inner-header flex">
      <div class="login">
        <!-- 用户登录卡片 -->
        <el-card class="login-card">
          <template #header>
            <div class="login-card-header">
              <span>用户登录</span>
            </div>
          </template>
          <!-- 表单 -->
          <el-form :model="loginData" :rules="loginDataRules" ref="loginData">
            <el-form-item prop="username" style="height: 40px">
              <!-- 用户名 -->
              <el-input style="height: 35px" prefix-icon="UserFilled" v-model.trim="loginData.username" maxlength="32" placeholder="请输入账号" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password" style="margin-top: 10px; height: 40px">
              <!-- 密码 -->
              <el-input style="height: 35px" prefix-icon="Lock" v-model.trim="loginData.password" maxlength="16" show-password placeholder="请输入密码" clearable></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 25px; margin-bottom: 5px">
              <!-- 登录按钮 -->
              <el-button type="primary" style="width: 100%;border-radius: 2px" :loading="loginLoading" @click="handleLogin">登 录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
    <div>
      <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
  <div class="content flex">
    <p style="font-size: 15px">@ 2023 k8s 管理平台</p>
  </div>
</template>

<script>
import common from "../common/config";
import httpClient from '../../utils/request';
import moment from 'moment';
// import jwt from 'jsonwebtoken';
export default{
  data() {
    return {
      //加载等待动画
      loginLoading: false,
      //登录验证的后端接口
      loginUrl: common.loginAuth,
      loginData: {
        username: '',
        password: ''
      },
      //校验规则
      loginDataRules: {
        username: [{
          required: true,
          message: '请填写用户名',
          trigger: 'change'
        }],
        password: [{
          required: true,
          message: '请填写密码',
          trigger: 'change'
        }],
      }
    }
  },
  methods: {
    //登录方法
    handleLogin() {
      httpClient.post(this.loginUrl, this.loginData)
          .then(res => {
            //账号密码校验成功后的一系列操作
            localStorage.setItem('username', this.loginData.username);
            localStorage.setItem('loginDate', moment().format('YYYY-MM-DD HH:mm:ss'));
            //生成token
            //let token = jwt.sign(this.loginData, 'adoodevops', { expiresIn: '10h' });
            //localStorage.setItem('token', token);
            //跳转至根路径
            this.$router.push('/');
            this.$message.success({
              message: res.msg
            })
          })
          .catch(res => {
            this.$message.error({
              message: res.msg
            })
          })
    }
  }
}
</script>

<style scoped>
.login {
  //position: absolute;
  width: 200%;
  height: 200%;
  background-size: 100%;
}
.login-card {
  position: absolute;
  left: 40%;
  top: 30%;
  width: 350px;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  outline-color: white;
  box-shadow: 10px 0 10px 1px rgba(0,0,0,0.2);
}
.login-card-header {
  text-align: center;
}

/*@import url(//fonts.googleapis.com/css?family=Lato:300:400);*/

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}
/*linear-gradient设置背景颜色渐变*/
.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
  color:white;
}
.logo {
  width:150px;
  fill:white;
  padding-right:15px;
  //display:inline-block;
  //vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
</style>
