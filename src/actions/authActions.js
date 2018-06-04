import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import {
  FB_AUTH_SUCCESS,
  EMAIL_AUTH_SUCCESS,
  AUTH_FAILED,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_ATTEMPT,
  FETCH_USER,
  SIGN_OUT
} from "./types";

export const fetchFbUser = fbtoken => async dispatch => {
  const token = firebase.auth.FacebookAuthProvider.credential(fbtoken);
  const res = await firebase.auth().signInAndRetrieveDataWithCredential(token);
  dispatch({ type: FB_AUTH_SUCCESS, payload: res });
  Actions.main();
};

export const logInUser = ({ email, password }) => async dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({ type: EMAIL_AUTH_SUCCESS, payload: res });
    Actions.main();
  } catch (err) {
    dispatch({ type: AUTH_FAILED });
  }
};

export const signUpUser = ({ email, password }) => async dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    dispatch({ type: EMAIL_AUTH_SUCCESS, payload: res });
    Actions.main();
  } catch (err) {
    dispatch({ type: AUTH_FAILED });
  }
};

export const onEmailChange = value => {
  return { type: EMAIL_CHANGE, payload: value };
};

export const onPasswordChange = value => {
  return { type: PASSWORD_CHANGE, payload: value };
};

export const signOut = () => dispatch => {
  dispatch({ type: SIGN_OUT });
  alert("logout");
  Actions.auth();
};
