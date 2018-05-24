import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {AsyncStorage} from 'react-native'

import {log} from './log'

const apiCall = axios.create({
  timeout: 60000,
  maxRedirects: 10,
  maxContentLength: 50 * 1000 * 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': '',
    'device_model': '', 'language': '', 'device_type': '', 'country': '', 'device_id': '', 'number': '',
    'longitude': 0,
    'latitude': 0
  }
})

apiCall
  .interceptors
  .response
  .use((res, req) => {
    log('myapi', res.request._method, res.request.responseURL)
    return res
  }, error => {
		const res = error.response || {}
    const {data, status} = res || {}
    const {code, message, results} = data || {}
    log('myapi-error', code, message, res.request._method, res.request.responseURL, data)
    if (status === 401 || status === 403) {
      requestHeader('token', '')
      AsyncStorage.clear()
      Actions.reset('LoginScreen')
    }
    return Promise.reject({data: {...data, code, message, results}, status})
  })
export function requestHeaders(headers) {
  Object
    .keys(headers || {})
    .map(k => {
      apiCall
        .defaults
        .headers[k] = headers[k]
    })
}
export function requestHeader(k, v) {
  apiCall
    .defaults
    .headers[k] = v
}
export function apicall(headers) {
  requestHeaders(headers)
  return apiCall
}
export {
  apiCall
}
