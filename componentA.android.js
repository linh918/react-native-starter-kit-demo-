import React, {Component} from 'react'
import {View,StyleSheet,Dimensions,Platform} from 'react-native'

import {Container,Header,Footer,Content,Text,Icon} from 'native-base'
import BaseComponent from './base'
import ProgressBar from './progressBar';
import TimePicker from './timepicker'
import SuperComponent from './SuperComponent'






export default class ComponentA extends SuperComponent {


  constructor(props) {
    content=(
      <Text>aaa</Text>
    )
    super(props,content);
    this.state={};
  }

 

  

  




 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  progressBar: {
    height: 50,
    // flex: 1,
    margin: 20,
   
    width: Dimensions.get('window').width - 2 * 20,
  },
});