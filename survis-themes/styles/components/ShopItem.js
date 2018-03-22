import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY} from '../../../src/constants'

const height = 110
const width = Dimensions.get('window').width

export default {
  oddBgColor: 'rgba(0,0,0,.02)',
  evenBgColor: 'white',
	container: {
		flex: 1, marginTop: 10, marginRight: 10, marginLeft: 10, backgroundColor: 'white'
	},
	image: {
		width: height, height, marginRight: 10,
  },
  name: {
    fontSize: 14, fontWeight: 'bold',
    marginBottom: 5
  },
	description: {
    fontSize: 12, 
		marginBottom: 10
	},
  price: {
    fontSize: 14, fontWeight: 'bold', color: PRIMARY,
  },
}
