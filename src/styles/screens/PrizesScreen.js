import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY, PRIZE_ITEM_HEIGHT} from '../../constants'

export default {
  heading: {
    padding: 10,
    backgroundColor: GREY
  },
  row: {
    marginTop: 10,
  }
}
