import { combineReducers } from "redux";
import marvelReduser from "./marvelList";
const rootReducer = combineReducers({
  marvelReduser,
});

export default rootReducer;
