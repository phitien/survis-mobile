import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function getUser() {
  return await AsyncStorage.getItem(`${APPNAME}:User`)
}
