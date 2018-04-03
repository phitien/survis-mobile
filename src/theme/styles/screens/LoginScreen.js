import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, RED} from '../../../constants'

export default {
  tabBarUnderlineStyle: {
    backgroundColor: PRIMARY,
		height: 1, marginBottom: -1,
  },
}
