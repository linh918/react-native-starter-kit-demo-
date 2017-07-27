const React = require("react-native");
import {Dimensions} from 'react-native';

const { StyleSheet } = React;
const { height, width } = Dimensions.get("window");
export default {
  container: {
    flex: 1,
    backgroundColor: "black"
  },

  image: {
    height: height / 3,
    width: width,
    resizeMode: 'contain'
  }
  ,textTieuDe:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    position:'absolute',
    top:height / 3-50,
    left:16
  }
};
