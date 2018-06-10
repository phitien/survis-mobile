import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width
const iconSize = 22

export default {
	iconSize,
	shoppingcart: {
		position: 'absolute',
		top: 5,
		alignSelf: 'center',
		left: 10,
		zIndex: 99,
		height: 18,
		width:18,
		padding: 0,
		paddingHorizontal: 0
	},
	count :{
		padding:0, top: 1, left: 3, margin: 0,fontSize: 11,position: 'absolute',
		fontWeight: '600' ,zIndex: 100, lineHeight: 14
	}
}
