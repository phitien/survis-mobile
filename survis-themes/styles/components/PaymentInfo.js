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
  iconedit: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 20
  }
}
