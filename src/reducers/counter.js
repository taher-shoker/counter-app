import {DOUBLE_INCREMENT,DOUBLE_DECREMENT, INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case INCREMENT_NUM: 
    return state + 1;
  case DOUBLE_INCREMENT: 
    return state + 2;
  case DOUBLE_DECREMENT: 
    return state - 2;
  case DECREMENT_NUM:
    return state - 1;
  case RESET:
    return state = action.payload;
  }

  return state;
}