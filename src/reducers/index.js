import { combineReducers } from "redux";
import auth from "./AuthReducer";
import todo from "./TodoReducer";

export default combineReducers({
  auth,
  todo
});
