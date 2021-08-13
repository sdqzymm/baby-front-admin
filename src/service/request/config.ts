import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInterceptorManager
} from 'axios'
import HyfRequest from '.'
import { HyfRequestConfig } from './types'

export const SHOW_LOADING = true

export const HANDLE_HEADER = true

export const HANDLE_RESPONSE = true

let BASE_URL = ''

export const TIME_OUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'xxx'
} else {
  BASE_URL = 'uuu'
}

export const registerShowLoadingInterceptor = (
  manager: AxiosInterceptorManager<AxiosRequestConfig>
) => {
  manager.use((config: HyfRequestConfig) => {
    // TODO: showLoading
    if (config.showLoading) {
      console.log('showloading')
    }
    return config
  })
}

export const registerHandleHeaderInterceptor = (
  manager: AxiosInterceptorManager<AxiosRequestConfig>
) => {
  manager.use(
    (config: AxiosRequestConfig) => {
      // TODO: 处理Header 如token
      return config
    },
    (err: any) => {
      // TODO: 请求失败
      return err
    }
  )
}

export const registerResponseInterceptor = (
  manager: AxiosInterceptorManager<AxiosResponse<any>>
) => {
  manager.use(
    (res: AxiosResponse) => {
      // TODO: 响应成功2XX
      return res.data
    },
    (err: any) => {
      // TODO: 响应失败3XX,4XX,5XX
      return err
    }
  )
}

export const registerEndInterceptor = (
  manager: AxiosInterceptorManager<AxiosResponse<any>>,
  request: HyfRequest
) => {
  manager.use(
    (res: AxiosResponse) => {
      // TODO: 关闭loading
      if (request._loading) {
        console.log('close loading')
      }
      return res
    },
    (err: any) => {
      // TODO: 关闭loading
      if (request._loading) {
        console.log('close loading')
      }
      return err
    }
  )
}

export { BASE_URL }
