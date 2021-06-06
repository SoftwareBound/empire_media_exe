import { combineReducers } from "redux";
import { timestampReducer } from "./timestampReducer";
import { timestampVarsReducer } from "./timestampVarsReducer";

export default combineReducers({
  timestampReducer,
  timestampVarsReducer,
});
