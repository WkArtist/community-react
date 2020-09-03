import axios from 'axios'

const instance = axios.create({
  timeout: 1000 * 12
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log('请求拦截器:请求错误')
  return Promise.reject(err)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  if (!response) {
    console.log('响应拦截器:数据是空的')
    return
  }
  return response
}, err => {
  if (err.response) {
    console.log('响应拦截器:err-data', err.response)
  }
  return Promise.resolve(err)
})

export default instance
