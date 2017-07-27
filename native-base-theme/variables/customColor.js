

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;

export default {
  tabDefaultBg: "#2874F0",
  topTabBarTextColor: "red",
  topTabBarActiveTextColor: "#fff",
  topTabActiveBgColor: platform === "ios" ? "#1569f4" : undefined,
  topTabBarBorderColor: "#fff",
  topTabBarActiveBorderColor: "#fff",
  
}