import {default as constants, basic} from './variables'

export function getTheme (variables) {
  variables = {...constants, ...variables}
  const theme = {
    variables,
    'NativeBase.Badge': require('./components/Badge').default(variables),
    'NativeBase.CheckBox': require('./components/CheckBox').default(variables),
    'NativeBase.Container': require('./components/Container').default(variables),
    'NativeBase.Content': require('./components/Content').default(variables),
    'NativeBase.Footer': require('./components/Footer').default(variables),
    'NativeBase.FooterTab': require('./components/FooterTab').default(variables),
    'NativeBase.Form': require('./components/Form').default(variables),
    'NativeBase.Header': require('./components/Header').default(variables),
    'NativeBase.Image': require('./components/Image').default(variables),
    'NativeBase.Item': require('./components/Item').default(variables),
    'NativeBase.Spinner': require('./components/Spinner').default(variables),
    'NativeBase.Tab': require('./components/Tab').default(variables),
    'NativeBase.TabContainer': require('./components/TabContainer').default(variables),
    'NativeBase.TabHeading': require('./components/TabHeading').default(variables),
    'NativeBase.Tabs': require('./components/Tabs').default(variables),

    'NativeBase.Icon': require('./components/Icon').default(variables),
    'NativeBase.IconNB': require('./components/Icon').default(variables),
    'NativeBase.Button': require('./components/Button').default(variables),
    'NativeBase.ButtonNB': require('./components/Button').default(variables),
    'NativeBase.Input': require('./components/Input').default(variables),
    'NativeBase.InputNB': require('./components/Input').default(variables),
    'NativeBase.Text': require('./components/Text').default(variables),
    'NativeBase.TextNB': require('./components/Text').default(variables),
    'NativeBase.View': require('./components/View').default(variables),
    'NativeBase.ViewNB': require('./components/View').default(variables),
  }

  Object.keys(theme).map(k => theme[k] = {...theme[k], ...basic})
  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      if (
        styleName.indexOf('.') === 0 &&
        parentKey &&
        parentKey.indexOf('.') === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {}
          } else {
            grandparent[styleName][parentKey] = style
          }
        }
      }
      if (style && typeof style === 'object') {
        cssifyTheme(parent, style, styleName)
      }
    })
  }
  cssifyTheme(null, theme, null)
  return theme
}

export default getTheme()
