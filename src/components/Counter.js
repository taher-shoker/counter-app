import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

 export const Counter= ({count,doubleCouter})=> {
   const [showBtns, setShowBtns] = useState(true);
  let background = "" ;
    if(count > 0){
       background = "bg-more-zero";
    }else if(count < 0){
      background = "bg-less-zero";

    }else{
      background = "bg-zero";
      ;
    };

  const handelBtnsGroup=(e)=>{
    setShowBtns(!showBtns);
  };
    return (
      <div className="counter">
        <div className={`${background}`}>{count}</div>
        <button className="btn-group" onClick={(e)=>handelBtnsGroup()}> buttons group </button>
        {showBtns && <Controls /> } 
      </div>
    );
  };


Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
