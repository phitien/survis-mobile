import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const height = 180

export default {
	info: {
		alignSelf: 'stretch', width: 'auto',
    maxWidth: width,
	},
	toptext: {
		position: 'absolute', top: 2, right: 16, padding: 6,
		borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
	},
	image_container: {
		width, height,
	},
  image: {width: '100%', height: '100%'},
}
