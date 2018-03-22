import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function getPaymentInfo() {
  return await AsyncStorage.getItem(`${APPNAME}:PaymentInfo`)
}
