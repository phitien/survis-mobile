import {PRIMARY, GREY} from '../../constants'

export default (variables) => {
  const textTheme = {
    fontSize: 14,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    '.grey': {color: GREY},
    '.theme': {color: PRIMARY},
    '.white': {color: 'white'},
    '.tiny': {fontSize: 9,},
    '.small': {fontSize: 11},
    '.normal': {fontSize: 13},
    '.big': {fontSize: 16},
    '.extra': {fontSize: 20},
    '.note': {color: '#a7a7a7',fontSize: variables.noteFontSize},
    '.red':{color: 'red'},
    '.green':{color: 'green'},
    '.white':{color: 'white'},
    '.bold': {fontWeight: 'bold',},
    '.heading': {fontSize: 14, fontWeight: 'bold', marginTop: 10, marginBottom: 10,},
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
