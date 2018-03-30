export default (variables) => {
  const {PRIMARY, GREY, platform} = variables

  return {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1, padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    'NativeBase.Text': {
      color: GREY,
    },
    'NativeBase.Icon': {
      color: GREY,
    },
    '.active': {
      'NativeBase.Text': {
        color: PRIMARY,
      },
      'NativeBase.Icon': {
        color: PRIMARY,
      }
    }
  }
}
