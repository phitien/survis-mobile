export function getTheme (variables) {
  variables = {...require('./variables/platform').default, ...variables || {}}
  const theme = {
    variables,
    'NativeBase.Left': require('./components/Left').default(variables),
    'NativeBase.Right': require('./components/Right').default(variables),
    'NativeBase.Body': require('./components/Body').default(variables),
    'NativeBase.Header': require('./components/Header').default(variables),
    'NativeBase.Title': require('./components/Title').default(variables),
    'NativeBase.Subtitle': require('./components/Subtitle').default(variables),
    'NativeBase.InputGroup': require('./components/InputGroup').default(variables),
    'NativeBase.Badge': require('./components/Badge').default(variables),
    'NativeBase.CheckBox': require('./components/CheckBox').default(variables),
    'NativeBase.Radio': require('./components/Radio').default(variables),
    'NativeBase.Card': require('./components/Card').default(variables),
    'NativeBase.CardItem': require('./components/CardItem').default(variables),
    'NativeBase.Toast': require('./components/Toast').default(variables),
    'NativeBase.H1': require('./components/H1').default(variables),
    'NativeBase.H2': require('./components/H2').default(variables),
    'NativeBase.H3': require('./components/H3').default(variables),
    'NativeBase.Form': require('./components/Form').default(variables),
    'NativeBase.Container': require('./components/Container').default(variables),
    'NativeBase.Content': require('./components/Content').default(variables),
    'NativeBase.Footer': require('./components/Footer').default(variables),
    'NativeBase.Tabs': require('./components/Tabs').default(variables),
    'NativeBase.Tab': require('./components/Tab').default(variables),
    'NativeBase.TabBar': require('./components/TabBar').default(variables),
    'NativeBase.TabHeading': require('./components/TabHeading').default(variables),
    'NativeBase.TabContainer': require('./components/TabContainer').default(variables),
    'NativeBase.FooterTab': require('./components/FooterTab').default(variables),
    'NativeBase.ListItem': require('./components/ListItem').default(variables),
    'NativeBase.Spinner': require('./components/Spinner').default(variables),
    'NativeBase.Fab': require('./components/Fab').default(variables),
    'NativeBase.Item': require('./components/Item').default(variables),
    'NativeBase.Label': require('./components/Label').default(variables),
    'NativeBase.Textarea': require('./components/Textarea').default(variables),
    'NativeBase.Segment': require('./components/Segment').default(variables),
    'NativeBase.Switch': require('./components/Switch').default(variables),
    'NativeBase.Separator': require('./components/Separator').default(variables),
    'NativeBase.SwipeRow': require('./components/SwipeRow').default(variables),
    'NativeBase.Thumbnail': require('./components/Thumbnail').default(variables),

    'ScrollView': require('./components/ScrollView').default(variables),

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
  const basic = {
    '.p': {padding: 10},
    '.pt': {paddingTop: 10},
    '.pr': {paddingRight: 10},
    '.pb': {paddingBottom: 10},
    '.pl': {paddingLeft: 10},
    '.bp': {padding: 15},
    '.bpt': {paddingTop: 15},
    '.bpr': {paddingRight: 15},
    '.bpb': {paddingBottom: 15},
    '.bpl': {paddingLeft: 15},
    '.sp': {padding: 5},
    '.spt': {paddingTop: 5},
    '.spr': {paddingRight: 5},
    '.spb': {paddingBottom: 5},
    '.spl': {paddingLeft: 5},
    '.m': {margin: 10},
    '.mt': {marginTop: 10},
    '.mr': {marginRight: 10},
    '.mb': {marginBottom: 10},
    '.ml': {marginLeft: 10},
    '.bm': {margin: 15},
    '.bmt': {marginTop: 15},
    '.bmr': {marginRight: 15},
    '.bmb': {marginBottom: 15},
    '.bml': {marginLeft: 15},
    '.sm': {margin: 5},
    '.smt': {marginTop: 5},
    '.smr': {marginRight: 5},
    '.smb': {marginBottom: 5},
    '.sml': {marginLeft: 5},
    '.full': {width: '100%'},
    '.flex1': {display: 'flex', flex: 1},
    '.flex2': {display: 'flex', flex: 2},
    '.flex3': {display: 'flex', flex: 3},
    '.flex4': {display: 'flex', flex: 4},
    '.flex5': {display: 'flex', flex: 5},
    '.flex6': {display: 'flex', flex: 6},
    '.full': {width: '100%'},
    '.fullh': {height: '100%'},
    '.bottom': {position: 'absolute', bottom: 0},
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
