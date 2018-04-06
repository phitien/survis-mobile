import {Platform, Dimensions, PixelRatio} from 'react-native'
const {height, width} = Dimensions.get('window')
import {PRIMARY, GREY} from '../../constants'

export default (variables) => {
	const {platformStyle, platform} = variables

	return {
		backgroundColor: PRIMARY,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: height == 812 ? 36 : 20,
		// marginTop: 20,
		'NativeBase.Button': {
			justifyContent: 'center', alignItems: 'center',
			alignSelf: 'center',
			padding: 6,
			'NativeBase.Icon': {
				color: 'white',
			},
		},
		'NativeBase.Item': {
			alignSelf: 'center',
			flex: 1, height: 24, borderRadius: 12,
			backgroundColor: 'white',
			'NativeBase.Icon': {
				color: PRIMARY,
				fontSize: 18,
				paddingRight: 0,
				paddingLeft: 8,
			},
			'NativeBase.Input': {
				alignSelf: 'center',
				height: 24,
				fontSize: 12,
			},
		},
	}

	return headerTheme
}
