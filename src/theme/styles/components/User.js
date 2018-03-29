import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
import {PRIMARY, GREY} from '../../../constants'

export default {
  container: {},
	user_info: {},
  info: {},
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
  password: {},
  actions: {},
  datepicker: {
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
			flex: 1,
      marginLeft: 36,
      height: 32,
      width: 220
    }
  }
}
