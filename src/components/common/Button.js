import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const Button = props => {
  const { btnStyle, btnTextStyle } = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={[btnStyle, props.style]}>
      <Text style={btnTextStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyle: {
    backgroundColor: "#008CBA",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    alignSelf: "stretch"
  },
  btnTextStyle: {
    alignSelf: "center",
    fontSize: 15,
    color: "#fff"
  }
};
