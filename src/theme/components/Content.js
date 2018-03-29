export default (variables) => {
  const contentTheme = {
    flex: 1, width: '100%', height: '100%',
    backgroundColor: 'white',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    },
    '.center': {justifyContent: 'center'},
    '.middle': {alignItems: 'center'},
  }

  return contentTheme
}
