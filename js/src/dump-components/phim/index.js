/**
 * Example dump-component
 */
import React, { Component } from "react";
import { View, ActivityIndicator, ToastAndroid } from "react-native";
import styles from "./styles";
import { Container, Tab, Tabs, Spinner, Text } from "native-base";
import PhimTab from "./phimTab/index";

export default class Phim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    };
  }

  componentWillMount() {}

  componentWillUpdate() {}

  render() {
    return (
      <View style={styles.container}>
        <Tabs tabBarUnderlineStyle={styles.underlineTab} locked={true}>
          <Tab
            heading="Đang chiếu"
            textStyle={styles.textTab}
            activeTextStyle={styles.activeTextTab}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <PhimTab name="Đang chiếu" {...this.props} />
          </Tab>
          <Tab
            heading="Sắp chiếu"
            textStyle={styles.textTab}
            activeTextStyle={styles.activeTextTab}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <PhimTab name="Đang chiếu" {...this.props} />
          </Tab>
          <Tab
            heading="Đặc biệt"
            textStyle={styles.textTab}
            activeTextStyle={styles.activeTextTab}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <PhimTab name="Đang chiếu" {...this.props} />
          </Tab>
        </Tabs>
      </View>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {}
}
