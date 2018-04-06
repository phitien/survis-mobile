import * as models from '../models'
import {log} from '../utils'
import {stateToProps} from './helper'

import * as custom from './custom'

function reducerGenerator(name) {
  const initialState = models[name] || {}
  const loadmore = initialState
  return function(state = initialState, action) {
    let rs = stateToProps(name, state, action, loadmore)
    if (rs) return rs
    if (custom[name]) rs = custom[name](name, state, action, initialState)
    if (rs) return rs
    return state
  }
}

const all = {}
Object.keys(models).map(name => {
  const model = models[name] || {}
  all[name] = reducerGenerator(name)
})
export default all
