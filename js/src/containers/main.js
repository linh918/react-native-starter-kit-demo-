import React, { Component } from "react";
import { Container,Content } from "native-base";
import Phim from "../dump-components/phim/index";
import MainHeader from "../dump-components/header/index";
import TinNong from "../dump-components/tinnong/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as types from "../constant/actionTypes";
import * as fetchActions from "../actions/fetchActions";
import * as changeColorActions from "../actions/changeColorActions";

 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { fetchActionData, fetchs,changeColorActionData,changeColors } = this.props;
    return (
      <Container>
        <MainHeader changeColorActionData={changeColorActionData} {...this.props}  />
        <Content>
          <Phim 
            fetchActionData={fetchActionData}
            {...fetchs}
            {...changeColors}
           
            />
          <TinNong />
        </Content>
      </Container>
    );
  }
}

  function mapStateToProps(state){
    return {
      fetchActionData:state.fetcher,
      changeColorActionData:state.changer
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      fetchs:bindActionCreators(fetchActions,dispatch),
      changeColors:bindActionCreators(changeColorActions,dispatch)
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
