import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY} from '../../../constants'

export default {
	starColor: PRIMARY,
  maxStars: 5,
  starSize: 12,
}
