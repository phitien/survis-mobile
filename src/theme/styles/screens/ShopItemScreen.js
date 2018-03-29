import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const size = 80

export default {
  container: {
    paddingTop: 10, paddingRight: 10, paddingLeft:10,
    flex: 1,
    backgroundColor: 'white'
	},
  image_container: {
    overflow: 'hidden',
		width: size, height: size,
  },
	image: {width: '100%', height: '100%'},
	info: {},
  statistic: {},
  voucher: {},
  reviews: {
    padding: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
  },
}
