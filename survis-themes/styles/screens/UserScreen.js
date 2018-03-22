import {Platform, Dimensions, PixelRatio} from 'react-native'

const width = Dimensions.get('window').width
const size = 80

export default {
  container: {
  },
  input: {
		height: 32,
	},
	checkbox: {
		marginRight: 5
	},
  avatar: {
		width: size, height: size,
		borderRadius: size/2,
		marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10,
  },
	logoutIcon: {position: 'absolute', right: 10, top: 10, padding: 20},
  tabsProps: {
    tabBarUnderlineStyle: {
      backgroundColor: "rgb(249,174,24)"
    }
  },
  tabProps: {
    tabStyle: {
      backgroundColor: 'transparent'
    },
    activeTabStyle: {
      // backgroundColor: 'rgb(249,174,24)',
    },
    activeTextStyle: {
      // color: '#fff'
    }
  },
}
