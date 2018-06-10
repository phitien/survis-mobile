import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width

export default {
	container: {
	},
	scanningFrame: {
		width: width - 2*24,
		height: width - 2*24,
		margin: 24,
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center'
	},

}
