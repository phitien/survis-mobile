import * as models from '../models'
import {apiCall} from '../utils'
import {query, url} from '../utils'
import {appstore} from '../store'
import axios from 'axios'
import querystring from 'querystring'

function apiGetGenerator(name, act, uri, method, filter, type) {
  return function(queryParams, postParams, headers) {
    const store = appstore()
    if (filter && !queryParams) queryParams = store.getState()[name].filter
    if (method == 'post' && type == 'form') {
      return apiCall.post(url(uri, query(queryParams)), querystring.stringify(postParams), {headers: {
        ...apiCall.defaults.headers,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }})
    }
    return apiCall[method](url(uri, query(queryParams)), postParams)
  }
}

const apis = {}
Object.keys(models).map(name => {
  const model = models[name] || {}, acts = model.acts || {}
  Object.keys(acts).map(act => {
    const value = acts[act]
    if (value.indexOf('api') == 0) {
      const [api, method, filter, type, uri] = value.split('|')
      apis[`${name}_${act}`] = apiGetGenerator(name, act, uri, method, filter == 'true', type)
    }
  })
})

export {
  apis
}
