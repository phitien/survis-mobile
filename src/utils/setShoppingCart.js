import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function setShoppingCart(ShoppingCart) {
  await AsyncStorage.setItem(`${APPNAME}:ShoppingCart`, JSON.stringify(ShoppingCart))
}
