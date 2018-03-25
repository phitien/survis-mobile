import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY} from '../../../src/constants'

const blockNumItem = 5
const width = Dimensions.get('window').width
const blockWidth = width/blockNumItem, blockHeight = 52, size = 40

export default {
	size,
	blockNumItem,
	container: {
		width: width, height: blockHeight, marginTop: 12, marginBottom: 12
	},
	blocke: {
		width: width, height: blockHeight, justifyContent: 'center'
	},
	item: {
		width: blockWidth, height: blockHeight
	},
	image_container: {
		width: size, height: size, borderRadius: size/2
	},
	image: {
		width: size, height: size,
	}
}
