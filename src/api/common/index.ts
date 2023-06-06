import { localRequest } from '@/service'
import { IEncryptData } from './type'

/**
 * @param {IEncryptData} data 加密数据
 * @return {*}
 * @description: 加密传输数据
 * @author: YDKD
 */
export function encryptData(data: IEncryptData) {
  return localRequest.request({
    url: '/common/encrypt',
    method: 'POST',
    data: data
  })
}
