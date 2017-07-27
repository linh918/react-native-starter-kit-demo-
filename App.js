import React from "react";
import App from "./js/fw/App";
import MainContainer from './js/src/containers/mainContainer'
export default class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return <MainContainer />;
  }
}
