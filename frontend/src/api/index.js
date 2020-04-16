import axios from 'axios'
import router from '@/router'
import { Message, Loading } from 'element-ui'
import { ResponseErrorHandle } from '@/utils'

const service = axios.create({
  // 设置超时时间
  timeout: 60000,
  baseURL: process.env.BASE_URL
})

// 请求头默认设置为application/json;charset=UTF-8
// service.defaults.headers['Access-Control-Allow-Origin'] = '*'
// service.defaults.headers['Access-Control-Allow-Methods'] = 'PUT,POST,GET,DELETE,OPTIONS'
service.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
let loading = null
service.interceptors.request.use(config => {
  // 在请求先展示加载框
  if (config.method === 'get') {
    loading = Loading.service({
      text: '正在加载中......'
    })
  }
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
  // 请求响应后关闭加载框
  if (loading) {
    loading.close()
  }
  const responseCode = response.status
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200 || responseCode === 201) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, error => {
  // 请求响应后关闭加载框
  if (loading) {
    loading.close()
  }
  // 断网 或者 请求超时 状态
  if (!error.response) {
    if (error.message.includes('timeout')) {
      // 请求超时状态
      Message.error('请求超时，请检查网络是否连接正常')
    } else {
      // 可以展示断网组件
      Message.error('请求失败，请检查网络是否已连接')
    }
    return
  }

  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  const responseCode = error.response.status
  switch (responseCode) {
    // 401：未登录
    case 401:
      // 跳转登录页
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    // 403: token过期
    case 403:
      // 弹出错误信息
      Message({
        type: 'error',
        message: '登录信息过期，请重新登录'
      })
      // 清除token
      localStorage.removeItem('token')
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: router.currentRoute.fullPath
        })
      }, 1000)
      break
    // 404请求不存在
    case 404:
      Message({
        type: 'error',
        message: '网络请求不存在'
      })
      break
    case 500:
      Message({
        type: 'error',
        message: '后台服务器异常，请联系管理员及时排查原因'
      })
      break
    // 其他错误，直接抛出错误提示
    default:
      console.log(error.response)
      Message({
        type: 'error',
        message: ResponseErrorHandle('未知异常，请联系管理员及时排查原因')
      })
  }
  return Promise.reject(error)
})

export default service
