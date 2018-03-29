import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const size = 110

export default {
	image_container: {width: size, height: size,},
	image: {width: '100%', height: '100%'},
	featured_image_container: {width: '100%', height: size},
  featured_image: {width: '100%', height: '100%'},
}
