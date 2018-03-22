import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {MessageBarManager} from 'react-native-message-bar'
import {AsyncStorage} from 'react-native'

const apiCall = axios.create({
  timeout: 60000,
  maxRedirects: 10,
  maxContentLength: 50 * 1000 * 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': '',
    'deviceId': '',
    'longitude': 0,
    'latitude': 0
  }
})

apiCall
  .interceptors
  .response
  .use((res, req) => {
    console.log(res.request.responseURL)
    return res
  }, error => {
    const {data, status} = error.response
    const {code, message} = data
    if (status === 401 || status === 403) {
      requestHeader('token', '')
      AsyncStorage.clear()
      Actions.replace('LoginScreen', {error: true})
      // Actions.popTo('LoginScreen')
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