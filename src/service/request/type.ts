import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求拦截拓展拦截器
interface FossRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 请求拦截拓展
interface FossRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: FossRequestInterceptor<T>
  showRequestLoading?: boolean
}

interface IBaseResponse<T = any> {
  status: number
  data: T
  msg: string
}

interface IUserInfo {
  nick?: string
  password?: string
}

export type {
  FossRequestConfig,
  FossRequestInterceptor,
  IBaseResponse,
  IUserInfo
}
