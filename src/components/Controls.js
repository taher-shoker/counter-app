import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ButtonsGroup from "./buttons-controls";

 class Controls extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyPress, false);
    //window.focus();
  };
  componentWillUnmount = () => document.removeEventListener("keydown", this.handleKeyPress, false);
  handleKeyPress = ({ keyCode }) => {
    if (keyCode === 39) {
         this.props.increment(); 
  
    }else if(keyCode === 37){
      this.props.decrement(); 

    }
  };

  render() {
    const { incrementLabel, decrementLabel,resetLabel, increment, decrement,reset} = this.props;
    
    return  <ButtonsGroup  incrementFuc={increment} decrementFuc={decrement} resetFuc={reset}/>;
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};


export default Controls;
