export default (variables) => {
  const {PRIMARY, GREY, platformStyle, platform} = variables
  const textTheme = {
    fontSize: 14,
    fontFamily: variables.fontFamily,
    color: '#000',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    '.grey': {color: GREY},
    '.theme': {color: PRIMARY},
    '.white': {color: 'white'},
    '.tiny': {fontSize: 10,},
    '.small': {fontSize: 12},
    '.normal-size': {fontSize: 14},
    '.big': {fontSize: 16},
    '.extra': {fontSize: 20},
    '.red':{color: 'red'},
    '.green':{color: 'green'},
    '.white':{color: 'white'},
    '.bold': {fontWeight: 'bold',},
    '.heading': {fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 10,},
    '.center': {textAlign: 'center'},
    '.left': {textAlign: 'left'},
    '.right': {textAlign: 'right'},
    '.italic': {fontStyle: 'italic'},
    '.underline': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#557ffb',
      color: '#557ffb'
    },
  }
  return textTheme
}
