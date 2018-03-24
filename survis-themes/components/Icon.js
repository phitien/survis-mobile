import variable from "./../variables/platform";

export default (variables = variable) => {
  const iconTheme = {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: "#000",
    '.white':{
      color: 'white'
    },
    '.big':{
      fontSize: 30
    },
    '.small':{
      fontSize: 16
    },
    '.theme': {
      color: variables.toolbarDefaultBg,
    },
    '.new-shop': {
      fontSize: 16,
      color: variables.toolbarDefaultBg,
      marginRight: 6,
    }
  };

  return iconTheme;
};
