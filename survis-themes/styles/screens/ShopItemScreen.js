import {Platform, Dimensions, PixelRatio} from 'react-native'

const height = 80
const width = Dimensions.get('window').width

export default {
  container: {
    paddingTop: 10, paddingRight: 10, paddingLeft:10,
    flex: 1,
    backgroundColor: 'white'
	},
	image: {
    overflow: 'hidden',
		width: height, height: height,
		marginBottom: 10, marginRight: 10,
  },
	info: {
    flex: 1,
	},
  statistic: {
    flex: 1, justifyContent: 'space-between'
  },
  voucher: {
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 11
  },
  reviews: {
    padding: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
  },
}
