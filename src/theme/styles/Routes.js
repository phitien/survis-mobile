import {Platform, Dimensions, PixelRatio} from 'react-native'

const width = Dimensions.get('window').width

const style = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarStyle: {
    backgroundColor: '#eee'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd'
  },
  sceneHeaderStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '400'
  }
}

if (Platform.OS === 'android') {
  style.sceneHeaderStyle.marginLeft = -20
}

export default style
