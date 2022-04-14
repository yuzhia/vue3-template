import request from '@/utils/request'

export const login = data => {
  return request({
    url: '/user/login',
    method: 'post',
    data: data
  })
}

export const getInfo = () => {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export const logout = () => {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
