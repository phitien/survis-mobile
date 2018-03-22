import {CONFIG} from '../constants'
import {apiCall} from '../utils'
import {query, url} from '../utils'
import {appstore} from '../store'
import axios from 'axios'
import querystring from 'querystring'

function apiGetGenerator(name, action, uri, method, filter, type) {
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
Object.keys(CONFIG).map(name => {
  if (typeof CONFIG[name] == 'object') {
    if (CONFIG[name].apiActions) {
      Object.keys(CONFIG[name].apiActions).map(action => {
        const str = CONFIG[name].apiActions[action]
        const [method, filter, type, uri] = str.split('|')
        apis[`${name}_${action}`] = apiGetGenerator(name, action, uri, method, filter == 'true', type)
      })
    }
  }
})

export {
  apis
}
