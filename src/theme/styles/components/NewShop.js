import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const size = 160

export default {
	container: {
		width: size,
	},
	info: {
		bottom: 0, position: 'absolute',
	},
	image_container: {width: size, height: size},
  image: {width: '100%', height: '100%'},
}
