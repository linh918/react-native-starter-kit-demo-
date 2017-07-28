import React, { Component } from "react";
import {
  Button,
  Container,
  Text,
  Thumbnail,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Title,
  Toast

} from 'native-base'

import PopupDialog, {
  DialogButton,
  DialogTitle,
  SlideAnimation,

} from "react-native-popup-dialog";
const slideAnimation = new SlideAnimation({ slideFrom: "bottom" });

export default class CustomDialog extends Component {
  render() {
    return (
      <Container>
      
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" color='green' />
            </Button>
          </Left>
          <Body>
            <Title>Dialog</Title>
          </Body>
          <Right />

        </Header>
     
        <Button
          transparent
          onPress={() => {
          //  this.popupDialog.show();
          Toast.show({
            text:'alo',
            buttonText:'alo',
            position:'bottom'
            
          })
          }}
        >
        <Text>Show dialog</Text>
        </Button>
        <PopupDialog
          dialogButton={<DialogButton text="OK" />}
          animationDuration={400}
          dialogAnimation={slideAnimation}
          dialogTitle={<DialogTitle title="Test" />}
          dialogStyle={{ borderRadius: 5 }}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
        >
          <Container>
            <Text>Hello</Text>
          </Container>
        </PopupDialog>
      </Container>
    );
  }

  componentDiaMount(){
    
  }
}

