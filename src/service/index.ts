import useToken from '@/hooks/tools/useToken'
import FossRequest from './request'
import { BASE_URL, TIMEOUT, VITE_LOCAL_REQUEST_URL } from './request/config'

const { getValue } = useToken()

// 可能这里会有不同的选项配置，会导出不同的请求实例
const baseRequest = new FossRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('实例请求拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      // console.log('实例请求错误')
      return error
    },
    responseInterceptor: (res) => {
      // console.log('实例响应拦截')
      return res
    },
    responseInterceptorCatch: (error) => {
      // console.log('实例响应错误')
      return error
    }
  }
})

const localRequest = new FossRequest({
  baseURL: VITE_LOCAL_REQUEST_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('实例请求拦截')

      if (getValue('access_token')) {
        config.headers = {
          Authorization: `Bearer ${getValue('access_token')}`,
          refreshToken: getValue('refresh_token')
        }
      }

      return config
    },
    requestInterceptorCatch: (error) => {
      // console.log('实例请求错误')
      return error
    },
    responseInterceptor: (res) => {
      // console.log('实例响应拦截')
      return res
    },
    responseInterceptorCatch: (error) => {
      // console.log('实例响应错误')
      return error
    }
  }
})

export { baseRequest, localRequest }
