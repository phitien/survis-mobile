import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY, PRIZE_ITEM_HEIGHT} from '../../constants'

const blockNumItem = 5
const blockWidth = width/blockNumItem, blockHeight = 52, iconSize = 36

export default {
	container: {
		backgroundColor: 'white', width: width/2 - 20, minHeight: PRIZE_ITEM_HEIGHT,
		margin: 10,
		borderWidth: 0,
    borderColor: GREY,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selected: {
		// backgroundColor: GREY,
	},
	image: {width: width/2 - 60, height: 110,},
  icon: {
		position: 'absolute', top: 10, left: 10, fontSize: 24,
    color: 'green'
  },
	sponsor: {
		justifyContent: 'center', alignItems: 'center'
	},
  sponsor_image: {
    width: 32, height: 32, borderRadius: 16,
  }
}
