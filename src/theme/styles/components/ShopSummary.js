import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const height = 80

export default {
	container: {},
	image_container: {
		overflow: 'hidden',
		width: height, height: height, borderRadius: height/2,
	},
	image: {width: '100%', height: '100%'},
	info: {},
  statistic: {}
}
