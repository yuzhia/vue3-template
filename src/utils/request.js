import axios from 'axios'
import { useUserStore } from '@/store/modules/user'
import { getToken } from '@/utils/auth'

const userStore = () => {
  return useUserStore()
}

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (userStore.getterToken) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code && res.code !== 200) {
      // TODO 提示错误消息

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 401) {
        userStore.resetToken()
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // TODO 提示错误消息
    return Promise.reject(error)
  }
)

export default service
