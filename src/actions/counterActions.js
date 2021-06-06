import { DOUBLE_INCREMENT,DOUBLE_DECREMENT,INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export const incrementNum= (payload)=> {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
};
export const doubleIncrementNum= (payload)=> {
  return {
    type: DOUBLE_INCREMENT,
    payload: payload
  };
};
export const doubleDecrementNum= (payload)=> {
  return {
    type: DOUBLE_DECREMENT,
    payload: payload
  };
};

export const decrementNum= (payload)=> {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
};
export const reset= ()=> {
  return {
    type: RESET,
    payload: 0
  };
};