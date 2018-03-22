import {AsyncStorage} from 'react-native'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'

import {headerMiddleware} from '../middlewares'
import {reducers} from '../reducers'
import {CONFIG, APPNAME} from '../constants'

let store = null

export function appstore() {
  if (!store) {
    const middleware = applyMiddleware(thunk, headerMiddleware)
    const enhancer = compose(middleware, autoRehydrate())
    store = createStore(reducers, CONFIG, enhancer)
  }
  return store
}

export default store
