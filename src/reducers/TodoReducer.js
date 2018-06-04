import { ListView } from "react-native";
import {
  FETCH_TASKS,
  TASK_CHANGE,
  ADDED_TASK,
  DELETE_TASK
} from "../actions/types";

const INITIAL_STATE = {
  newTask: "",
  tasks: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };
    case TASK_CHANGE:
      return { ...state, newTask: action.payload };
    case ADDED_TASK:
      return { ...state, newTask: "" };
    case DELETE_TASK:
      return { ...state };
    default:
      return state;
  }
};
