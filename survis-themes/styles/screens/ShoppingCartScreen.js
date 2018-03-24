import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY, GREY} from '../../../src/constants'

const width = Dimensions.get('window').width
const evenBgColor = GREY
const oddBgColor = 'white'
const size = 80
const col0W = 180, boxW = 28, col1W = boxW*3 + 10

export default {
  evenBgColor, oddBgColor,
  size,
  col0W, col1W,
  row: {
    padding: 10,
    width: '100%',
    justifyContent: 'space-between'
  },
  col0: {
    paddingLeft: 10,
    width: col0W,
    overflow: 'hidden',
  },
  col1: {
    width: col1W,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  col2: {
    paddingRight: 10,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image_container: {width: size,height: size,marginRight: 10},
  image: {width: size,height: size},
  control: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  control_text: {
    height: '100%',
    width: boxW, height: boxW,
    borderWidth: 1,
    borderColor: GREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  control_icon: {
    borderWidth: 1,
    borderColor: GREY,
    fontSize: 24,
    width: boxW, height: boxW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    color: PRIMARY,
    fontSize: 12,
    marginRight: 5,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  }
}
