import { defineStore } from 'pinia'
import { login, logout, getInfo } from '@/api/loginUser'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getToken(),
      name: 'hah',
      avatar: 'asdas'
    }
  },
  getters: {
    getterToken() {
      return this.token
    }
  },
  actions: {
    login(userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(res => {
            this.token = res.data.token
            setToken(res.data.token)
            resolve()
            //TODO 登录成功提示消息
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const { data } = response

            if (!data) {
              reject('Verification failed, please Login again.')
            }
            const { name, header } = data
            this.name = name
            this.avatar = header
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 退出登录
    logout({ state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            removeToken() // must remove  token  first
            resetRouter()
            // 重置 store
            this.$reset()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 刷新token
    resetToken() {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        this.$reset()
        resolve()
      })
    }
  }
})
