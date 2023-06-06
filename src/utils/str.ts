import config from '@/config'

/**
 * 拼接url
 * @param url 地址
 * @returns
 */
const montageUrl = (url: string) => {
  if (url.startsWith('http')) {
    return url
  }
  return `${config.fileUploadUrl}${url}`
}

/**
 * @description: 将秒数，转为时分秒
 */

const formatSeconds = (value: number | null): string => {
  if (value === null) return '0秒'
  let theTime = parseInt(value + '') // 秒
  let theTime1 = 0 // 分
  let theTime2 = 0 // 小时
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60 + '')
    theTime = parseInt((theTime % 60) + '')
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60 + '')
      theTime1 = parseInt((theTime1 % 60) + '')
    }
  }
  let result = '' + parseInt(theTime + '') + '秒'
  if (theTime1 > 0) {
    result = '' + parseInt(theTime1 + '') + '分' + result
  }
  if (theTime2 > 0) {
    result = '' + parseInt(theTime2 + '') + '小时' + result
  }
  return result
}

export { montageUrl, formatSeconds }
