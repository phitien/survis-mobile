import {requestHeader} from '../utils'

export const headerMiddleware = store => next => action => {
  const {User} = store.getState(), {token} = User || {}
  requestHeader('token', token)
  next(action)
}
