import axios from 'axios'
// 将 aioxs 封装为 vue 的插件
var myaxios = {}
// 挂载一个方法： install
myaxios.install = function (Vue) {
  // 设置统一的请求路径
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
  // 用来进行全局设置的
  

  
  // 在 axios 的拦截器中添加一段内容：
  axios.interceptors.request.use(function (config) {
    // 只要在请求非 login 时才需要执行
    if (config.url !== '/login') {
      // 在请求头中添加 Authorization
      // 进行局部设置
      config.headers['Authorization'] = window.localStorage.getItem('token')
    }
    console.log(config)
    return config
  })

  // 将 axios 挂载到 vue 构造器中
  Vue.prototype.$http = axios
}
export default myaxios