import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../constants'

export default {
	fullStarColor: PRIMARY,
	emptyStarColor: PRIMARY,
	starColor: GREY,
  maxStars: 5,
  starSize: 12,
}
