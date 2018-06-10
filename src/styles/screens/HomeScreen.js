import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {GREY} from '../../constants'

const fontSize = 30

export default {
  container: {
  },
  text: {
    color: '#fff',
    fontSize: fontSize,
    fontWeight: 'bold'
  },
}
