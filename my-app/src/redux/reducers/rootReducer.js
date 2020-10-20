import { combineReducers } from "redux";

import { reducer } from "./reducer";

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  teams: reducer,
});

export default rootReducer;
