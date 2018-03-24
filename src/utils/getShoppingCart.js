import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function getShoppingCart() {
  return await AsyncStorage.getItem(`${APPNAME}:ShoppingCart`)
}
