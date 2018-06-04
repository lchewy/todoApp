import React, { Component } from "react";
import { Text, View } from "react-native";
import { LoginButton, AccessToken } from "react-native-fbsdk";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Header, Button } from "../common";

class AuthView extends Component {
  render() {
    const { fetchFbUser } = this.props;
    return (
      <View>
        <Header heading="TODO APP" />

        <Button onPress={() => Actions.loginView()} style={{ marginTop: 150 }}>
          Log in
        </Button>
        <Button
          onPress={() => Actions.signinView()}
          style={{ backgroundColor: "#f44336" }}
        >
          Sign Up
        </Button>

        <View style={styles.fbBtnStyle}>
          <LoginButton
            readPermissions={["public_profile", "email"]}
            onLoginFinished={(error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  fetchFbUser(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => alert("logout.")}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  fbBtnStyle: {
    justifyContent: "center",
    alignItems: "center"
  }
};

const mstp = ({ auth: loading }) => ({ loading });

export default connect(
  mstp,
  actions
)(AuthView);
