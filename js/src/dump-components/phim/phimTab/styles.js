import {StyleSheet, Dimensions, Platform } from 'react-native';

const {width,height} = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: "black"
  },

  image: {
    height: "100%",
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