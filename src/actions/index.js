import {CONFIG} from '../constants'
import {apis} from '../apis'

function actionGenerator(n) {
  return function(payload) {
    return dispatch => {
      dispatch({type: n, payload})
    }
  }
}
function apiActionGenerator(name, action, uri, method, filter, type) {
  return function(params, payload, ...args) {
    return dispatch => {
      dispatch({type: `${name}_${action}_Pending`})
      let api = apis[`${name}_${action}`],
        apicall = method == 'post' ? api(payload, params, ...args) : api(params, payload, ...args)
      apicall
        .then(response => dispatch({type: `${name}_${action}_Success`, payload: response.data.results, response}))
        .catch(error => dispatch({
          type: `${name}_${action}_Failure`, error,
          payload: error.response.data.results || error.response.data
        }))
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
