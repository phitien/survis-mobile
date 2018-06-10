import {Platform, Dimensions, PixelRatio} from 'react-native'
const width = Dimensions.get('window').width

export default {
  background: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
	container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  icon_close: {
    fontSize: 30,
    marginRight: 20,
    marginTop: 24
  },
}
