import React, { Component } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import AuthView from "./components/Auth/AuthView";
import LoginView from "./components/Auth/LoginView";
import SigninView from "./components/Auth/SigninView";
import Main from "./components/Todo/Main";
import LogoutView from "./components/Auth/LogoutView";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="authView"
            component={AuthView}
            title="Login/Signup"
            initial
          />
          <Scene key="loginView" component={LoginView} title="Login w/ Email" />
          <Scene
            key="signinView"
            component={SigninView}
            title="Signin w/ Email"
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="todoApp"
            component={Main}
            title="Your Daily Todos"
            initial
          />
          <Scene key="logOut" component={LogoutView} title="GoodBye!" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
