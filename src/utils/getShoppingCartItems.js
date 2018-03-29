import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function getShoppingCartItems() {
  return await AsyncStorage.getItem(`${APPNAME}:ShoppingCartItems`)
}
