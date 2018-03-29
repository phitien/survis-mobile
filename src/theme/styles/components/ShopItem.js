import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../../constants'

const height = 110

export default {
	container: {},
  odd: {backgroundColor: GREY},
  even: {},
  image_container: {width: height, height},
	image: {width: '100%', height: '100%'},
}
