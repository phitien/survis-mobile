import {Platform, Dimensions, PixelRatio} from 'react-native'
import {PRIMARY} from '../../../src/constants'

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
  avatar_container: {
    width: size, height: size,
    borderRadius: size/2,
    overflow: 'hidden',
    marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10,
  },
  avatar: {
		width: size, height: size,
  },
	logout: {
    position: 'absolute', right: 10, top: 10, padding: 10,
    backgroundColor: 'transparent'
  },
  logout_icon: {
    color: PRIMARY
  },
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
      backgroundColor: PRIMARY,
      color: 'white'
    },
    activeTextStyle: {
      // color: '#fff'
    }
  },
}
