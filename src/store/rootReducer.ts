// reducers.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import counterReducer from "@features/counter/counter.slice";

/**
 * Combines reducers of all slices and router into one root reducer
 *
 * @param history Browser history for react-router-dom
 */
const createRootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,

    // The rest of your reducers go here in the following format:
    // ...
    // feature: featureReducer
    // ...
  });
export default createRootReducer;
