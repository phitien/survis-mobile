import {Alert, Linking, Platform} from 'react-native'

export function openExternal(url) {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url)
    } else {
      Alert.alert('Error', 'Unable to open: ' + url, [{text: 'OK'}])
    }
  })
}
