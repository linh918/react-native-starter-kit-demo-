import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button,StyleProvider, H3,Icon, Text, Header,Footer,FooterTab, Title,Content, Body, Left, Right,Tabs,Tab,TabHeading } from "native-base";

import styles from "./styles";
import NetworkUtils from '../../utils/NetworkUtils'



const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");
const ic_user=require('../../../img/ic_user_50px.png');
const ic_menu=require('../../../img/ic_menu_50px.png');

class Home extends Component {
	// eslint-disable-line

	render() {
		return (
		
			<Container>
				<StatusBar barStyle="light-content" />
				<Header
					androidStatusBarColor="black"
				 style={styles.header} noShadow>
					<Left style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
						<Image
						source={ic_user}
						style={styles.imageUser}
						/>
						<Text >CulturerPlex</Text>
					</Left>
					<Right>
					 <Icon name="menu" style={{color:'red'}} />
					</Right>	
				</Header>
			
				<Content>	
				
		
				</Content>	
						
				
				
				
		
			</Container>
		
		);
	}
 componentDidMount(){
 // NetworkUtils.getDataFromApi("https://demo0789878.mockable.io/tinuudai/getall",(response)=>console.log(response),(error)=>console.log("error\n"+error))
 }

}

export default Home;
