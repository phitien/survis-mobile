import { Platform } from 'react-native'

export default (variables) => {
  const {GREY, platformStyle, platform} = variables

  const tabContainerTheme = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    backgroundColor: 'transparent',
  }

  return tabContainerTheme
}
