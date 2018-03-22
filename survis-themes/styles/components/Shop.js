import {Platform, Dimensions, PixelRatio} from 'react-native'

const height = 110
const width = Dimensions.get('window').width
const size = height

export default {
	container: {
    flex: 1,
		marginTop: 10, marginLeft: 10, marginRight: 10,
    backgroundColor: 'white',
	},
	image: {
		width: size, height: size,
  },
  info: {
		flex: 1,
    marginRight: 10,
	},
  statistic: {
  },
  featured_image: {
    flex: 1, height: height,
  },
  featured_info: {
    position: 'absolute',
		bottom: 0,
		flex: 1,
		padding: 10,
		backgroundColor: 'rgba(104,54,5,.6)',
		display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'
  }
}
