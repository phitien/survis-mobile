import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY} from '../../../src/constants'

const size = 110
const evenBgColor = GREY
const oddBgColor = 'white'

export default {
	evenBgColor, oddBgColor,
	container: {
    flex: 1,
    marginTop: 10, marginLeft: 10, marginRight: 10,
  },
	even: {
		backgroundColor: evenBgColor,
	},
	odd: {
		backgroundColor: oddBgColor,
	},
  image: {
		width: size, height: size
  },
}
