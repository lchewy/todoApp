import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { LoginButton } from "react-native-fbsdk";
import * as actions from "../../actions";
import { Button } from "../common";

class LogoutView extends Component {
  renderBtn() {
    const { fbAuth, emailAuth, signOut } = this.props;
    if (fbAuth && !emailAuth) {
      return <LoginButton onLogoutFinished={() => signOut()} />;
    }
    if (emailAuth && !fbAuth) {
      return <Button onPress={()=> signOut()}>Sign Out</Button>;
    }
  }

  render() {
    return <View style={styles.containerStyle}>{this.renderBtn()}</View>;
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};

const mstp = ({ auth: { fbAuth, emailAuth } }) => ({ fbAuth, emailAuth });

export default connect(mstp, actions)(LogoutView);
