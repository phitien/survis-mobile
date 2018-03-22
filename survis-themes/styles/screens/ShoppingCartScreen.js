import {Platform, Dimensions, PixelRatio} from 'react-native'

const width = Dimensions.get('window').width
const evenBgColor = 'rgb(247, 247,247)'
const oddBgColor = 'white'
const size = 80

export default {
  evenBgColor, oddBgColor, size,
  container: {
  },
  image: {width: size,height: size}
}
