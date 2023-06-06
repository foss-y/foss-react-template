import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type {
  FossRequestConfig,
  FossRequestInterceptor,
  IBaseResponse
} from './type'

import { REQUEST_LOADING_STATUS, REQUEST_LOADING_TIPS } from '@/global'
import FossLoading from '@/components/foss-loading'
import { createRoot } from 'react-dom/client'
import { message } from 'antd'
import { router } from '@/router'

const dom = document.createElement('div')
dom.setAttribute('id', 'loading')

const root = createRoot(dom)

class FossRequest {
  requestInstance: AxiosInstance
  interceptors?: FossRequestInterceptor
  showRequestLoading: boolean
  requestCountNum: number

  constructor(config: FossRequestConfig) {
    this.requestInstance = axios.create(config)
    this.interceptors = config.interceptors
    this.showRequestLoading =
      config.showRequestLoading ?? REQUEST_LOADING_STATUS

    this.requestCountNum = 0

    // add global instance interceptor
    this.requestInstance.interceptors.request.use(
      (req) => {
        // console.log('全局实例的请求拦截')

        if (this.showRequestLoading) {
          this.showLoading()
        }

        return req
      },
      (error) => {
        console.log('请求失败', error)
        this.hideLoading()
        return Promise.reject(error)
      }
    )
    this.requestInstance.interceptors.response.use(
      (res) => {
        // console.log('全局实例的响应拦截')

        // remove requestLoading
        this.hideLoading()

        const data = res.data
        const returnCode = data.returnCode
        if (returnCode != '-10001') {
          return res.data
        } else {
          // Error Message Tips
          console.log('Elemessage错误')
        }
      },
      (error) => {
        // remove request loading
        this.hideLoading()

        const errorCode = error.response?.status
        let path
        // use Router to handle
        switch (errorCode) {
          case 404:
            console.error('404错误')
            message.error('Not Found')
            path = '/error/not-found'
            break
          case 403:
            console.error('403错误')
            message.error('Forbidden')
            path = '/error/forbidden'
            break
          case 500:
            console.error('服务内部错误')
            message.error('Server Error')
            path = '/error/system-error'
            break
          default:
            path = '/'
            break
        }

        router.navigate(path)

        console.error('请求失败', error)
      }
    )

    // add request instance interceptor
    this.requestInstance.interceptors.request.use(
      this.interceptors?.requestInterceptor as any,
      this.interceptors?.requestInterceptorCatch
    )

    this.requestInstance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  showLoading() {
    if (this.requestCountNum == 0) {
      const dom = document.createElement('div')
      dom.setAttribute('id', 'loading')
      document.body.appendChild(dom)
      root.render(<FossLoading spinning={true} tip={REQUEST_LOADING_TIPS} />)
    }
    this.requestCountNum++
  }

  hideLoading() {
    this.requestCountNum--
    if (this.requestCountNum === 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.body.removeChild(document.getElementById('loading')!)
    }
  }

  request<T = IBaseResponse>(config: FossRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // single request interceptor
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // handle request loading
      if (config.showRequestLoading == false) {
        this.showRequestLoading = false
      }

      this.requestInstance
        .request<any, T>(config)
        .then((res) => {
          // single reponse interceptor
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)
        })
        .catch((error) => {
          reject(error)
          // console.log(error)
        })
        .finally(() => {
          // initial request loading
          this.showRequestLoading = REQUEST_LOADING_STATUS
        })
    })
  }
}

export default FossRequest
