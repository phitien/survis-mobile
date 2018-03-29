import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const size = 110

export default {
	container: {
    width, minHeight: size,
  },
	image_container: {width: size, height: size},
	image: {width: '100%', height: '100%'},

}
