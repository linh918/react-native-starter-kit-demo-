import React, {Component} from 'react'
import {Container,Text,Header,Body,Footer,Content} from 'native-base'
export default class SuperComponent extends Component {
  constructor(props,content) {
    super(props);
    this.state={};
    this.content=content
  }

  componentWillMount(){
    console.log("super will mount");
  }

  componentWillUpdate(){
    console.log("super will update");
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
           {this.content}
          </Content>  
        <Footer style={{backgroundColor:'white'}}>
         </Footer> 
      </Container>
    )
  }

  _showMessage(message){
      console.log(message);
  }

  componentDidUpdate(){
    console.log("super did update");
    
  }

  componentDidMount(){
     console.log("super did mount");
  }
}