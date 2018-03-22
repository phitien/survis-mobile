import {AsyncStorage} from 'react-native'
import {APPNAME} from '../constants'

export async function setUser(User) {
  await AsyncStorage.setItem(`${APPNAME}:User`, JSON.stringify(User))
}
