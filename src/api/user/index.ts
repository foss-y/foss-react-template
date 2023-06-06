import { localRequest } from '@/service'
import { IBaseResponse, IUserInfo } from '@/service/request/type'
import { IRegisterData, ISendEmail, IUpdateUserPd, IUserLogin } from './type'

export function sendEmailCodeApi(data: ISendEmail) {
  return localRequest.request({
    url: '/user/email-code',
    method: 'POST',
    data
  })
}

/**
 * @return {Promise<IBaseResponse>}
 * @description: 更新用户信息
 * @author: YDKD
 */
export function updateUserInfoApi(data: IUserInfo) {
  return localRequest.request({
    url: '/user/info',
    method: 'PUT',
    data
  })
}

/**
 * @param {IRegisterData} data 注册数据
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function registerUserApi(data: IRegisterData) {
  return localRequest.request({
    url: '/user/register',
    method: 'POST',
    data
  })
}

/**
 * @param {IRegisterData} data 修改数据
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function updateUserApi(data: IRegisterData) {
  return localRequest.request({
    url: '/user',
    method: 'PUT',
    data
  })
}

/**
 * @param {IUserLogin} data 注册数据
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function loginApi(data: IUserLogin) {
  return localRequest.request({
    url: '/user/dts',
    method: 'POST',
    data
  })
}

/**
 * @return {Promise<IBaseResponse>}
 * @description: 获取用户信息
 * @author: YDKD
 */
export function getUserInfoApi() {
  return localRequest.request({
    url: '/user/info',
    method: 'GET'
  })
}

/**
 * @return {*}
 * @description: 退出登录
 * @author: YDKD
 */
export function logoutApi() {
  return localRequest.request({
    url: '/user/logout',
    method: 'DELETE'
  })
}

/**
 * @return {Promise<IBaseResponse>}
 * @description: 更新用户信息
 * @author: YDKD
 */
export function updateUserPdApi(data: IUpdateUserPd) {
  return localRequest.request({
    url: '/user/pd',
    method: 'PUT',
    data
  })
}

/**
 * @param {IRegisterData} data 更新用户邮箱
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function updateUserEmailApi(data: IRegisterData) {
  return localRequest.request({
    url: '/user/email',
    method: 'PUT',
    data
  })
}
