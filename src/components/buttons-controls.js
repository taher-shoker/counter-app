/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from "react";

const ButtonsGroup = ({incrementLabel,resetLabel,decrementLabel,incrementFuc,decrementFuc,resetFuc}) => {
  return (
    <div className="controls">
      <div
        className="btn add"
        onClick={() => {
            incrementFuc();
        }}
      >
        <span>{incrementLabel}</span>
      </div>
      <div
        className="btn"
        onClick={() => {
            resetFuc();
        }}
      >
        <span>{resetLabel}</span>
      </div>
      <div
        className="btn"
        onClick={() => {
            decrementFuc();
        }}
      >
        <span>{decrementLabel}</span>
      </div>
    </div>
  );
};

ButtonsGroup.defaultProps = {
    incrementLabel: "+",
    decrementLabel: "-",
    resetLabel:"Reset"
  };
export default ButtonsGroup;
