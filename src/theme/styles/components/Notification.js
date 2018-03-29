import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../../constants'

const size = 110
const evenBgColor = GREY
const oddBgColor = 'white'

export default {
	evenBgColor, oddBgColor,
	container: {},
	even: {backgroundColor: evenBgColor,},
	odd: {backgroundColor: oddBgColor,},
	image_container: {width: size, height: size},
  image: {width: '100%', height: '100%'},
}
