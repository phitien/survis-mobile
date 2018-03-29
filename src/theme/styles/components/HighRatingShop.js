import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const size = 180

export default {
  image_container: {width, height: size,},
	image: {width: '100%', height: '100%'},
}
