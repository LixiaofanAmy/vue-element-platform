import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'

const _axios = axios.create();

_axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    token ? config.headers.common['Authorization'] = token : null
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  response => {
    const res = response.data
    switch (res.code) {
      case 200:
        return res
      case 401:
        router.replace({name: 'login'})
        break
      default:
        Message({ message: res.message || 'Error', type: 'error'})
        return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    Message({ message: error.message || 'Error', type: 'error'})
    return Promise.reject(error);
  }
)

export default _axios