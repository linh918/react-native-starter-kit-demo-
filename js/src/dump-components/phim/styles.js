import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    height: 300
  },
  underlineTab: {
    backgroundColor:'transparent'
  },

  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  header: {
    backgroundColor: "white"
  },
  imageUser: {
    width: 30,
    height: 30
  },

  tab: {
    backgroundColor: "white"
  },
  textTab:{
    fontSize:14,
    color:'gray'
  },
  activeTextTab:{
  fontSize:14,
    color:'black'
  },
  
};
