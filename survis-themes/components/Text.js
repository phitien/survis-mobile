import variable from './../variables/platform'

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize
    },
    '.small': {
      fontSize: variables.smallFontSize
    },
    '.big': {
      fontSize: variables.bigFontSize
    },
    '.red':{
      color: 'red'
    },
    '.green':{
      color: 'green'
    },
    '.white':{
      color: 'white'
    },
    '.body-text-style': {
      fontSize: 26,
      color: 'black'
    },
    '.body-text-style-white': {
      fontSize: 20,
      color: 'white'
    },
    '.logo-text-style': {
      fontSize: 24,
      color: 'black'
    },
    '.body-inactive-text-style': {
      fontSize: 18,
      color: '#818181'
    },
    '.body-active-text-style': {
      fontSize: 18,
      color: '#2398f4'
    },
    '.subtitle-active': {
      fontSize: 16,
      fontWeight: 'bold',
      color: variables.blueWithAHintOfPurple
    },
    '.big-header': {
      fontSize: 24,
      fontWeight: 'bold',
      color: variables.blueWithAHintOfPurple
    },
    '.subtitle-inactive': {
      fontSize: 16,
      color: variables.warmGrey,
      textDecorationColor: variables.warmGrey
    },
    '.subtitle-inactive-small': {
      fontSize: 14,
      color: variables.warmGrey,
      textDecorationColor: variables.warmGrey
    },
    '.subtitle-inactive-tiny': {
      fontSize: 12,
      color: variables.warmGrey,
      textDecorationColor: variables.warmGrey
    },
    '.subtitle-black': {
      fontSize: 16,
      fontWeight: 'normal',
      color: 'black'
    },
    '.subtitle-white': {
      fontSize: 16,
      fontWeight: 'normal',
      color: 'white'
    },
    '.subtitle-white-uppercase': {
      fontSize: 16,
      color: 'white'
    },
    '.text_style': {
      fontSize: 16,
      fontWeight: '100',
      color: 'black'
    },
    '.body_text_15_black': {
      fontSize: 15,
      color: 'black'
    },
    '.subtitle_error': {
      fontSize: 14,
      color: 'red'
    },
    '.bold': {
      fontWeight: 'bold',
    },
    '.fs9': {
      fontSize: 9,
    },
    '.fs18': {
      fontSize: 18,
    },
    '.fs20': {
      fontSize: 20,
    },
    '.fs12': {
      fontSize: 12,
    },
    '.fs14': {
      fontSize: 14,
    },
    '.caption': {
      fontSize: 11,
      color: 'black'
    },
    '.underline': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#557ffb',
      color: '#557ffb'
    },
    '.theme' : {
      color: variables.toolbarDefaultBg
    },
  	'.footer' : {
  	  fontSize: 7
    },
  }
  return textTheme
}
