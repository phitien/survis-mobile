import {AsyncStorage} from 'react-native'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'

import {headerMiddleware} from '../middlewares'
import {reducers} from '../reducers'
import * as constants from '../constants'
import * as models from '../models'

let store = null

export function appstore() {
  if (!store) {
    const middleware = applyMiddleware(thunk, headerMiddleware)
    const enhancer = compose(middleware, autoRehydrate())
    store = createStore(reducers, {...models}, enhancer)
  }
  return store
}

export default store
