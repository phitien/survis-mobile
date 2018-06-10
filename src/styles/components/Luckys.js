import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width

export default {
  sponsor: {
		justifyContent: 'center', alignItems: 'center'
	},
  sponsor_image: {
    width: 32, height: 32, borderRadius: 16,
  }
}
