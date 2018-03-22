import {Platform, Dimensions, PixelRatio} from 'react-native'

const width = Dimensions.get('window').width

export default {
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
  },
  datepicker: {
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      marginLeft: 36,
      height: 32,
      width: 200
    }
  }
}
