import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function setPaymentInfo(PaymentInfo) {
  await AsyncStorage.setItem(`${APPNAME}:PaymentInfo`, JSON.stringify(PaymentInfo))
}
