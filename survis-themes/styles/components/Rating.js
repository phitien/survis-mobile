import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY} from '../../../src/constants'

const height = 110
const width = Dimensions.get('window').width
const size = height

export default {
	starColor: PRIMARY,
  maxStars: 5,
  starSize: 15,
}
