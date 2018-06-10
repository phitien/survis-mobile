import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../constants'

export default {
  container: {},
  cardnum: {
    backgroundColor: GREY,
    padding: 10,
  },
  card_icon: {marginRight: 10},
  info: {
    padding: 10,
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  checkbox: {
    marginRight: 5
  },
  edit_icon: {
    color: PRIMARY,
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10
  },
  shipping: {
  },
  actions: {
  }
}
