import { combineReducers } from "redux";

import { penderReducer as pender } from "redux-pender";

import counter from "./counter";
import post from "./post";

export default combineReducers({
  counter,
  post,
  pender,
});
