import React, { Component } from "react";
import { 
  Container,
  Left,
  Text,
  Right,
  Icon,
  Header

 } from "native-base";
import {Image,TouchableOpacity} from 'react-native'
import styles from './styles'

const ic_user = require("../../../img/ic_user_50px.png")

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentWillUpdate() {}

  render() {
    return (
      <Header androidStatusBarColor="black" style={styles.header} noShadow>
        <Left
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        > 
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
          <Image source={ic_user} style={styles.imageUser}  />
          </TouchableOpacity>
          <Text>CulturerPlex</Text>
        </Left>
        <Right>
          <Icon name="menu" style={{ color: this.props.changeColorActionData.color }}   />
        </Right>
      </Header>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {}
}
