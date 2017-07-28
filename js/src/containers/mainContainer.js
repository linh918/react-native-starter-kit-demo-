import React, { Component } from "react";
import Navigator from "../config/routes";
import { addNavigationHelpers } from "react-navigation";
import { View, Text } from "react-native";

import { bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";
import nav from "../reducers/navigatorReducer";
import configureStore from "../store/configureStore";
import {Root} from 'native-base';

let store = configureStore();

const App = ({ dispatch, nav }) => {
  return (
    <Navigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
    />
  );
};
function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

const AppWithNavigation = connect(mapStateToProps)(App);

export default class MainContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
        <AppWithNavigation />
        </Root>
      </Provider>
    );
  }
}
