import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface interceptors {
  request?: {
    onFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig
    onRejected?: (error: any) => any
  }
  response?: {
    onFulfilled?: (res: AxiosResponse) => AxiosResponse
    onRejected?: (error: any) => any
  }
}

export interface HyfRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean
  handleHeader?: boolean
  handleResponse?: boolean
  interceptors?: interceptors
}
