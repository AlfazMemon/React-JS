import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import studentReducer from "./reducers/studentReducer";

const store = createStore(
  studentReducer,
  applyMiddleware(thunk)
);

export default store;