import * as models from '../models'
import {apiCall} from '../utils'
import {query, url, log} from '../utils'
import {appstore} from '../store'
import qs from 'querystring'

function apiGetGenerator(name, act, uri, method, filter, type) {
  return function(queryParams, postParams, headers) {
    const store = appstore(), state = store.getState()[name], actState = state[act] || {}
    const args = []
    const options = apiCall.defaults
    options.headers = {...options.headers, ...headers}
    if (filter) queryParams = {...actState.filter, ...queryParams}
    if (method == 'get') {
      console.log('apiGetGenerator', url(uri, query({...queryParams, ...postParams || {}})))
      args.push(url(uri, query({...queryParams, ...postParams || {}})))
    }
    else {//other methods post put delete
      args.push(url(uri, query(queryParams)))
      if (type == 'form') {
        method = 'post'
        args.push(qs.stringify(postParams))
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
      }
      else args.push(postParams)
      args.push(options)
    }
    return apiCall[method](...args)
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
