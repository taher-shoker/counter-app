import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import { incrementNum, decrementNum,reset} from "../actions/counterActions";

export class Controller extends Component {

  render() {
    return (
      <Controls {...this.props}/>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementNum());
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

export default connect(null, mapDispatchToProps)(Controls);
