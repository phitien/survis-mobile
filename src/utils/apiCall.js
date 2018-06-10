import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {AsyncStorage} from 'react-native'
import {Platform, Dimensions} from 'react-native'

import {log} from './log'

const platform = Platform.OS

const oheaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'token': '',
  'device_model': '', 'language': '', 'device_type': '', 'country': '', 'device_id': '', 'number': '',
  'longitude': 0,
  'latitude': 0,
  platform
}

const apiCall = axios.create({
  timeout: 60000,
  maxRedirects: 10,
  maxContentLength: 50 * 1000 * 1000,
  headers: oheaders
})

const success = (res, req) => {
  console.log('survis-api', res.request._method, res.request.responseURL)
  if (!res || !res.data) return {data: {results: null}, status: 200}
  return res
}

const failure = err => {
  const res = err.response || {}
  const {data, status} = res || {}
  const {code, message, results} = data || {}
  console.log('survis-api-error', err)
  if (status === 401 || status === 403) {
    requestHeader('token', '')
    AsyncStorage.clear()
    Actions.reset('LoginScreen')
  }
  return Promise.reject({data: {...data || {}, code, message, results}, status})
}
apiCall
  .interceptors
  .response
  .use(success, failure)

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
  success,
  failure,
  apiCall
}
