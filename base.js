import React, {Component} from 'react'
import {
  Container,
  Header,
  Footer,
  Content,
  Body,
  Text,

} from 'native-base'
export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  componentWillMount(){
  }

  componentWillUpdate(){
  }

  render(){
    return(
      <Container>
        <Header style={{backgroundColor:'white'}} >
          
          <Body>
            <Text>
              {this.props.title}
            </Text>
           </Body> 
         </Header>
         <Content>
           {this.props.content}
          </Content>  
        <Footer style={{backgroundColor:'white'}}>
         </Footer> 
      </Container>
    )
  }

  componentDidUpdate(){
  }

  componentDidMount(){
  }
}