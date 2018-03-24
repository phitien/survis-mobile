import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY, PRIZE_ITEM_HEIGHT} from '../../../src/constants'

const width = Dimensions.get('window').width

export default {
  heading: {
    padding: 10,
    backgroundColor: GREY
  },
  row: {
    marginTop: 10,
  }
}
