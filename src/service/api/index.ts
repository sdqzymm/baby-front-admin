import HyfRequest from '../request'
import { BASE_URL, TIME_OUT } from '../request/config'

const hyfRequest = new HyfRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hyfRequest
