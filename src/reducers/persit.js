import {MAX_PAGE} from '../constants'
import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'
import {log} from '../utils'

export async function persitUser(User) {
  await AsyncStorage.setItem(`${APPNAME}:User`, JSON.stringify(User))
}

export async function persitPaymentInfo(PaymentInfo) {
  await AsyncStorage.setItem(`${APPNAME}:PaymentInfo`, JSON.stringify(PaymentInfo))
}

export async function persitShoppingCartItems(ShoppingCartItems) {
  await AsyncStorage.setItem(`${APPNAME}:ShoppingCartItems`, JSON.stringify(ShoppingCartItems))
}
