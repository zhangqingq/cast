// axios 的使用； 将 axios 封装为 Vue 的插件

// 引入 axios
import axios from 'axios'

var myaxios = {}
// 挂载一个方法： install
myaxios.install = function (Vue) {
  // 设置统一路径
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

  // 添加一个请求拦截器
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 在发送请求之前 设置 请求头
    // 只要在请求非 login 时才需要执行
    if (config.url !== '/login') {
      // 在请求头中添加 Authorization
      // 进行局部设置
      config.headers['Authorization'] = window.localStorage.getItem('token')
    }
    console.log(config);
    console.log(config.url);
    return config;
  });

  // 将 axios 挂载到 vue 构造器中
  Vue.prototype.$http = axios
}

// 导出
export default myaxios
