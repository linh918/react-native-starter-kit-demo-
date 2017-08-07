import React, { Component } from "react";
import { Container, Text, Content, Thumbnail } from "native-base";
import { Platform, View } from "react-native";

import MainHeader from "../dump-components/header/index";
import TextComponent from "../dump-components/text/textComponent";
import ProgressBar from "../../../progressBar.js";
import TimePicker from "../../../timePicker.js";

const ic_smile = require("../../img/ic_smile.png");
export default class PlatformDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourOfDay: 3,
      minute: 30
    };
  }

  componentWillMount() {}

  componentWillUpdate() {}

  render() {
    return (
      <Container>
        <MainHeader title="PlatformDemo" {...this.props} />
        <Content>
          <TextComponent />
          {Platform.OS == "android" &&
            <Thumbnail square size={30} source={ic_smile} />}
          {Platform.OS == "ios" && <Text>Smile</Text>}
          <ProgressBar
            progress={0}
            indeterminate={true}
            style={{ height: 30, width: 30 }}
          />
        
          
            <TimePicker
              onTimeChange={timeObject =>
                this.setState({
                  hourOfDay: timeObject.hourOfDay,
                  minute: timeObject.minute
                })}
              style={{ flex: 2, height: 350, width: 400 }}
            />
        
        

          <Text>
            {this.state.hourOfDay}:{this.state.minute}
          </Text>
        </Content>
      </Container>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {}
}
