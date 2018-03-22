import {Platform, Dimensions, PixelRatio} from 'react-native'
import {GREY} from '../../../src/constants'

const height = 240
const width = Dimensions.get('window').width

export default {
	container: {
    flex: 1,
		backgroundColor: GREY,
	},
  description: {
    padding: 10,
  },
	slide: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
		width, height, overflow: 'hidden'
  },
	slideInfo: {
		backgroundColor: 'rgba(0, 0, 0, 0.6)', top: 175, padding: 10,
		position: 'absolute', alignSelf: 'stretch', width:'auto'
	},
	slideTopText: {
		position: 'absolute', top: 2, right: 16, padding: 6,
		borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
	},
  image: {
		position: 'absolute', top: 0, left: 0,
		width, height,
  },
	shop_image: {
		width: 80, height: 80, marginTop: 10, marginBottom: 10, marginLeft: 10, borderRadius: 40
	},
}
