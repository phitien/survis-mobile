import variable from './../variables/platform';

export default (variables = variable) => {
  const contentTheme = {
    '.padder': {
      padding: variables.contentPadding
    },
    flex: 1, width: '100%', height: '100%',
    backgroundColor: 'white',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  };

  return contentTheme;
};
