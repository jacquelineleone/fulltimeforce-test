import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import commitsReducer from "./commits";

const rootReducer = combineReducers({
  routing: routerReducer,
  commitsReducer: commitsReducer,
});

export default rootReducer;
