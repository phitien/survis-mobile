import {CONFIG} from '../constants'
import {apis} from '../apis'

function actionGenerator(n) {
  return function(payload) {
    return dispatch => {
      dispatch({type: n, payload})
      return new Promise((resolve, reject) => {
        resolve({type: n, payload})
      })
    }
  }
}
function apiActionGenerator(name, action, uri, method, filter, type) {
  return function(params, payload, ...args) {
    return dispatch => {
      dispatch({type: `${name}_${action}_Pending`})
      let api = apis[`${name}_${action}`],
        apicall = method == 'post' ? api(payload, params, ...args) : api(params, payload, ...args)
      return apicall
        .then(res => {
          dispatch({type: `${name}_${action}_Success`, payload: res.data.results, response: res})
          return res
        })
        .catch(e => {
          dispatch({
            type: `${name}_${action}_Failure`, error: e,
            payload: e.response.data.results || e.response.data
          })
          return e.response
        })
    }
  }
}

const actions = {}
Object.keys(CONFIG).map(name => {
  if (typeof CONFIG[name] == 'object') {
    if (CONFIG[name].actions) {
      Object.keys(CONFIG[name].actions).map(action => {
        actions[`${name}_${action}`] = actionGenerator(`${name}_${action}`)
      })
    }
    if (CONFIG[name].apiActions) {
      Object.keys(CONFIG[name].apiActions).map(action => {
        const str = CONFIG[name].apiActions[action]
        const [method, filter, type, uri] = str.split('|')
        actions[`${name}_${action}`] = apiActionGenerator(name, action, uri, method, filter == 'true', type)
      })
    }
  }
})
export {
  actions
}
