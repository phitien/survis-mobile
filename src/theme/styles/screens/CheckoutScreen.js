import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../../constants'

const evenBgColor = GREY
const oddBgColor = 'white'

export default {
  evenBgColor, oddBgColor,
  heading: {
    padding: 10,
    backgroundColor: GREY
  },
  row: {},
  agreement: {
    padding: 10,
  }
}
