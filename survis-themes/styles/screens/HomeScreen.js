import {Platform, Dimensions, PixelRatio} from 'react-native'
import {GREY} from '../../../src/constants'

const width = Dimensions.get('window').width
const fontSize = 30

export default {
  container: {
  },
  text: {
    color: '#fff',
    fontSize: fontSize,
    fontWeight: 'bold'
  },
  newshops_text: {
    fontSize: 16, fontWeight: 'bold', margin: 10
  },
  newshops: {
    backgroundColor: GREY,
  },
  nearby_shops: {
    container: {
      flex:1, backgroundColor: 'grey'
    }
  },
}
