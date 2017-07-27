import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
} from "native-base";

import styles from "./styles";

class Success extends Component {
  
  constructor(props) {
       super(props);
       this.state={
         success:false
       };
     }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Success Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item success={this.state.success}  error={!this.state.success} >
            <Input placeholder="Textbox with Success Input"  onChangeText ={(text)=>{
              text.length>5?this.setState({success:true}):this.setState({success:false})

             }}
            
             />
                {this.state.success? <Icon name='checkmark-circle' />: <Icon name='close-circle' /> }
              
          </Item>
        </Content>
      </Container>
    );
  }
}

export default Success;
