import {Platform, Dimensions, PixelRatio} from 'react-native'

import {PRIMARY} from '../constants'

const {width, height} = Dimensions.get('window')

export default style = {
  width, height,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
