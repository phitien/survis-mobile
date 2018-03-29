import { Platform } from 'react-native'

export default (variables) => {
  const radioTheme = {
    '.selected': {
      'NativeBase.IconNB': {
        color: Platform.OS === 'ios'
          ? variables.brandPrimary
          : variables.radioSelectedColorAndroid,
        lineHeight: Platform.OS === 'ios' ? 25 : variables.radioBtnLineHeight,
        height: Platform.OS === 'ios' ? 20 : 25
      }
    },
    'NativeBase.IconNB': {
      color: Platform.OS === 'ios' ? 'transparent' : undefined,
      lineHeight: Platform.OS === 'ios'
        ? undefined
        : variables.radioBtnLineHeight,
      fontSize: Platform.OS === 'ios' ? undefined : variables.radioBtnSize
    }
  }

  return radioTheme
}
