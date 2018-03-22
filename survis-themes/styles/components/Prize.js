import {Platform, Dimensions, PixelRatio} from 'react-native'

const blockNumItem = 5
const width = Dimensions.get('window').width
const blockWidth = width/blockNumItem, blockHeight = 52, iconSize = 36

export default {
	container: {
		width: width/2, padding: 10, backgroundColor: 'white',  flex:1, borderWidth: 0, borderColor: 'rgb(249, 174, 24)'
	},
	icon_wrapper: {
		position: 'absolute', top: -2, backgroundColor: 'transparent', left: -2, padding: 6, zIndex: 1000
	},
  icon: {
    color: 'green'
  },
  image: {
    width: width/2 - 20, height: 115
  },
  image_sponsor: {
    width: 20, height: 20, borderRadius: 10, marginRight: 5
  }
}
