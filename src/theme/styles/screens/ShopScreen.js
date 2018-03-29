import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY} from '../../../constants'

const size = 240

export default {
	container: {},
	image_container: {width, height: size},
  image: {width: '100%', height: '100%'},
}
