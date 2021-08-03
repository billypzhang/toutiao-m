/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'

const BASE_URL = '/api'

/**
 * 用户登录
 */
export const login = data => {
  return request({
    method: 'POST',
    url: `${BASE_URL}/app/v1_0/authorizations`,
    data
  })
}

/**
 * 发送短信验证码
 */
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `${BASE_URL}/app/v1_0/sms/codes/${mobile}`
  })
}

/**
 * 获取用户自己的信息
 */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: `${BASE_URL}/app/v1_0/user`
  })
}
