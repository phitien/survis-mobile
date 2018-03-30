export default (variables) => {
  const badgeTheme = {
    backgroundColor: variables.badgeBg,
    height: 12, width: 12, borderRadius: 6,
    alignSelf: 'center',
    'NativeBase.Text': {
      color: 'white',
      fontSize: 8,
      textAlign: 'center',
    },
    '.primary': {
      backgroundColor: variables.btnPrimaryBg
    },
    '.warning': {
      backgroundColor: variables.btnWarningBg
    },
    '.info': {
      backgroundColor: variables.btnInfoBg
    },
    '.success': {
      backgroundColor: variables.btnSuccessBg
    },
    '.danger': {
      backgroundColor: variables.btnDangerBg
    },
  }
  return badgeTheme
}
