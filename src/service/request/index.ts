import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HyfRequestConfig } from './types'
import {
  registerShowLoadingInterceptor,
  registerHandleHeaderInterceptor,
  registerResponseInterceptor,
  registerEndInterceptor,
  SHOW_LOADING,
  HANDLE_HEADER,
  HANDLE_RESPONSE
} from './config'

class HyfRequest {
  private _instance: AxiosInstance
  private _showLoading: boolean
  public _loading: boolean
  private _handleHeader: boolean
  private _handleResponse: boolean

  constructor(config: HyfRequestConfig) {
    this._instance = axios.create(config)
    this._showLoading = config.showLoading ?? SHOW_LOADING
    this._loading = false
    this._handleHeader = config.handleHeader ?? HANDLE_HEADER
    this._handleResponse = config.handleResponse ?? HANDLE_RESPONSE
    this._registerInterceptors(config)
  }

  private _registerInterceptors(config: HyfRequestConfig) {
    // 注册默认的showLoading请求拦截器
    this._showLoading && this._registerShowLoadingInterceptor()
    // 注册默认的处理header请求拦截器
    this._handleHeader && this._registerHandleHeaderInterceptor()
    // 注册默认的响应拦截器(返回res.data)
    this._handleResponse && this._registerResponseInterceptor()
    // 注册实例自身的拦截器
    config.interceptors && this._registerCustomInterceptors(config)
    // 注册默认的请求生命周期结束的拦截器(请求结束前做点事在这: 如在这里关闭loading)
    this._registerEndInterceptor()
  }

  private _registerShowLoadingInterceptor() {
    registerShowLoadingInterceptor(this._instance.interceptors.request)
  }

  private _registerHandleHeaderInterceptor() {
    registerHandleHeaderInterceptor(this._instance.interceptors.request)
  }

  private _registerResponseInterceptor() {
    registerResponseInterceptor(this._instance.interceptors.response)
  }

  private _registerEndInterceptor() {
    registerEndInterceptor(this._instance.interceptors.response, this)
  }

  private _registerCustomInterceptors(config: HyfRequestConfig) {
    this._instance.interceptors.request.use(
      config.interceptors?.request?.onFulfilled,
      config.interceptors?.request?.onRejected
    )
    this._instance.interceptors.response.use(
      config.interceptors?.response?.onFulfilled,
      config.interceptors?.response?.onRejected
    )
  }

  // 对单个请求没必要配置拦截器, 毫无意义, 去除这个配置
  request(config: Omit<HyfRequestConfig, 'interceptors'>) {
    return this._instance.request(config)
  }
}

export default HyfRequest
