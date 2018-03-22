import {combineReducers} from 'redux'

import {default as Categories} from './Categories'
import {default as Device} from './Device'
import {default as HighRatingShops} from './HighRatingShops'
import {default as Histories} from './Histories'
import {default as Location} from './Location'
import {default as Loyalties} from './Loyalties'
import {default as NewShops} from './NewShops'
import {default as Notifications} from './Notifications'
import {default as PaymentInfo} from './PaymentInfo'
import {default as PaymentMethods} from './PaymentMethods'
import {default as Prizes} from './Prizes'
import {default as Promotions} from './Promotions'
import {default as Push} from './Push'
import {default as Reviews} from './Reviews'
import {default as Screen} from './Screen'
import {default as ShoppingCart} from './ShoppingCart'
import {default as Shops} from './Shops'
import {default as User} from './User'

const reducers = combineReducers({
  Categories,
  Device,
  HighRatingShops,
  Histories,
  Location,
  Loyalties,
  NewShops,
  Notifications,
  PaymentInfo,
  PaymentMethods,
  Prizes,
  Promotions,
  Push,
  Reviews,
  Screen,
  ShoppingCart,
  Shops,
  User
})

export {
  reducers
}
