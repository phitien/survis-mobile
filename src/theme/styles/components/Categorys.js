import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../../constants'

const blockNumItem = 5, height = 72, size = 32

export default {
	height,
	size,
	blockNumItem,
}
