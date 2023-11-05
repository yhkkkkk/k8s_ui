/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import axios from 'axios';

// 新建个axios对象
const httpClient = axios.create({
  validateStatus(status) {
    return status >= 200 && status < 504; // 设置默认的合法的状态,若状态码不合法,则不接收response
  },
  timeout: 10000, // request timeout
});

httpClient.defaults.retry = 3; // 请求重试次数
httpClient.defaults.retryDelay = 1000; // 请求时间间隔
httpClient.defaults.shouldRetry = true; // 是否重试
httpClient.defaults.retryCondition = (error) => {
  return error.response.status === 401;
};

// 添加请求拦截器
httpClient.interceptors.request.use(
  config => {
    // 添加header
    config.headers['Content-type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer'+ localStorage.getItem('token') //可以全局设置接口请求header中带token
    config.headers['Accept-Language'] = 'zh-CN'

    if (config.method === 'post') {
      if (!config.data) { // 没有参数时 config.data为空 需要转换一下类型
        config.data = {}
      }
    }
    return config
  },
  err => {
    // Promise.reject()方法返回一个带有拒绝原因的Promise对象,并不会终止Promise链的执行
    return Promise.reject(err)
  }
);

// 添加相应拦截器
httpClient.interceptors.response.use(
  response => {
    // 处理状态码
    if (response.status !== 200) {
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  err => {
    return Promise.reject(err)
  }
);

export default httpClient;