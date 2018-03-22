import {Platform, Dimensions, PixelRatio} from 'react-native'

const height = 80
const width = Dimensions.get('window').width

export default {
	container: {
    padding: 10, flex: 1,
    backgroundColor: 'rgba(0,0,0,.1)'
	},
	image: {
    overflow: 'hidden',
		width: height, height: height, borderRadius: height/2,
		marginBottom: 10, marginRight: 10,
  },
	info: {
    flex: 1,
	},
  statistic: {
    flex: 1, justifyContent: 'space-between'
  }
}
