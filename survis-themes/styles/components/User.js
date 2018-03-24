import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY} from '../../../src/constants'

const width = Dimensions.get('window').width

export default {
  container: {
    padding: 10,
  },
	user_info: {
		padding: 10,
    // marginTop: 10,
    backgroundColor: GREY,
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
  password: {
    paddingLeft: 10, paddingRight: 10, paddingBottom: 20,
    marginTop: 10,
    backgroundColor: GREY,
  },
  actions: {
    marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'
  },
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
