import { Platform } from 'react-native'

export default (variables) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === 'ios' ? '600' : undefined,
    textAlign: 'center'
  }

  return titleTheme
}
