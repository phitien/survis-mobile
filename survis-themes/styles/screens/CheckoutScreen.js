import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY} from '../../../src/constants'

const width = Dimensions.get('window').width
const evenBgColor = GREY
const oddBgColor = 'white'

export default {
  evenBgColor, oddBgColor,
  heading: {
    padding: 10,
    backgroundColor: GREY
  },
  row: {
    paddingLeft: 10,
    paddingTop: 10, paddingBottom: 10, paddingRight: 10,
  },
  label: {
    padding: 10,
    backgroundColor: 'white',
  },
  content: {
    padding: 10,
    backgroundColor: GREY
  },
  agreement: {
    padding: 10,
  }
}
