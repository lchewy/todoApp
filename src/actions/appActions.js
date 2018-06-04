import firebase from "firebase";
import { FETCH_TASKS, TASK_CHANGE, ADDED_TASK, DELETE_TASK } from "./types";

export const fetchTasks = () => async dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();
  await firebase
    .database()
    .ref(`/users/${uid}/tasks`)
    .on("value", snapshot => {
      dispatch({ type: FETCH_TASKS, payload: snapshot.val() });
    });
};

export const addNewTask = value => async dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();
  const db = firebase.database().ref(`/users/${uid}/tasks`);

  db.push({ value });

  dispatch({ type: ADDED_TASK });
};

export const onTaskChange = value => {
  return { type: TASK_CHANGE, payload: value };
};

export const deleteTask = key => async dispatch => {
  const {
    currentUser: { uid }
  } = firebase.auth();
  await firebase
    .database()
    .ref(`/users/${uid}/tasks`)
    .child(key)
    .remove();
  dispatch({ type: DELETE_TASK });
};
