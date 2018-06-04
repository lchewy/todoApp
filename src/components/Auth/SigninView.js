import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Button, Input, Spinner } from "../common";
import * as actions from "../../actions";

class Signin extends Component {
  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyles}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderSpinner() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
  }

  render() {
    const {
      onEmailChange,
      onPasswordChange,
      email,
      password,
      signUpUser
    } = this.props;
    return (
      <View style={styles.containerStyles}>
        <Input
          label="Email"
          placeholder="john@gmail.com"
          onChangeText={val => onEmailChange(val)}
          value={email}
        />

        <Input
          label="Password"
          secureTextEntry
          placeholder="password"
          onChangeText={val => onPasswordChange(val)}
          value={password}
        />
        {this.renderError()}
        {this.renderSpinner()}
        <Button
          onPress={() => signUpUser({ email, password })}
          style={{ backgroundColor: "#f44336" }}
        >
          Sign up
        </Button>
      </View>
    );
  }
}

const mstp = ({ auth: { email, password, error, loading } }) => ({
  email,
  password,
  error,
  loading
});

export default connect(
  mstp,
  actions
)(Signin);

const styles = {
  containerStyles: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  errorTextStyles: {
    fontSize: 20,
    alignSelf: "center",
    color: "red",
    marginBottom: 10
  }
};
