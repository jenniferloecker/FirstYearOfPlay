import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  teams: {},
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
