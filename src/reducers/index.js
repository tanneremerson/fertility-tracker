import dataReducer from "./data";
import currentCycleReducer from "./currentCycle";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  data: dataReducer,
  currentCycle: currentCycleReducer
});

export default allReducers;
