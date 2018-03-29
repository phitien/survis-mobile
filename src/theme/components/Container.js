import { Platform, Dimensions } from 'react-native'
const deviceHeight = Dimensions.get('window').height

export default (variables) => {
  const theme = {
    flex: 1, width: '100%', height: '100%',
    // height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20
  }
  return theme
}
