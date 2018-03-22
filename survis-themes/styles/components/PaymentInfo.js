import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY} from '../../../src/constants'

const width = Dimensions.get('window').width

export default {
  container: {
    padding: 10,
  },
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
  input: {
    height: 32,
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
    paddingLeft: 10, paddingRight: 10, paddingBottom: 20,
    marginTop: 10,
    backgroundColor: GREY,
  },
  actions: {
    marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'
  }
}
