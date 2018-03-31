import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {MessageBarManager} from 'react-native-message-bar'
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
    log('api', res.request._method, res.request.responseURL)
    return res
  }, error => {
		const res = error.response || {}
		log('api-error', res.request._method, res.request.responseURL, JSON.stringify(apiCall.defaults.headers), JSON.stringify(res.data))
    const {data, status} = res || {}
    const {code, message} = data || {}
    if (status === 401 || status === 403) {
      requestHeader('token', '')
      AsyncStorage.clear()
      Actions.replace('LoginScreen', {error: true})
      return
    } else {
      return Promise.reject(error)
    }
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
