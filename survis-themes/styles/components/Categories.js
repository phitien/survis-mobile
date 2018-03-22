import {Platform, Dimensions, PixelRatio} from 'react-native'

const blockNumItem = 5
const width = Dimensions.get('window').width
const blockWidth = width/blockNumItem, blockHeight = 52, iconSize = 36

export default {
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
	icon: {
		width: iconSize, height: iconSize, marginBottom: 4
	}
}
