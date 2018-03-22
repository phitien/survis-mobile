import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY} from '../../../src/constants'

const height = 240
const width = Dimensions.get('window').width

export default {
	container: {
		flex: 1,
	},
  items: {

  },
  image: {
		width, height,
  },
	shop_image: {
		width: 80, height: 80, marginTop: 10, marginBottom: 10, marginLeft: 10, borderRadius: 40
	},
  review_header: {
    flex: 1, alignItem: 'center', justifyContent: 'space-between',
    padding: 10, backgroundColor: 'rgba(0,0,0,.1)'
  },
  back: {
    color: PRIMARY
  }
}
