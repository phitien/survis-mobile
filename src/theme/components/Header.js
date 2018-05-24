import {Platform, Dimensions, PixelRatio} from 'react-native'
const {height, width} = Dimensions.get('window')
import {PRIMARY, GREY} from '../../constants'

export default (variables) => {
	const {platformStyle, platform} = variables

	return {
		backgroundColor: PRIMARY,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: platform == 'ios' ? (height == 812 ? 36 : 20) : 6,
		'NativeBase.Button': {
			justifyContent: 'center', alignItems: 'center',
			alignSelf: 'center',
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			'NativeBase.Icon': {
				color: 'white',
				fontSize: 22,
			},
		},
	}

	return headerTheme
}
