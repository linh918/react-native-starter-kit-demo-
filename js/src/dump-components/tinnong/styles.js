const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  image: {
    height: deviceHeight*0.2,
    width:deviceHeight*0.25,
    resizeMode:'contain'
  },
  text:{
    fontSize:14
  },
  list:{
    backgroundColor:'white'
  }
};

