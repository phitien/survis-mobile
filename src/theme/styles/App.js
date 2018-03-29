import {Platform, Dimensions, PixelRatio} from 'react-native'

import {PRIMARY} from '../../constants'

const {width, height} = Dimensions.get('window')

export default style = {
  container: {
    width, height,
    flex: 1,
    display: 'flex',
    // backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {}
}
