import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import penderMiddleware from "redux-pender";

import reducers from "./pages/redux/contents/reducers";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(penderMiddleware())));

export default store;
