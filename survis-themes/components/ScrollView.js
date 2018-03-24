import variable from './../variables/platform'

export default (variables = variable) => {
  const viewTheme = {
    '.full': {width: '100%'},
    '.flex1': {flex: 1},
  }

  return viewTheme
}
