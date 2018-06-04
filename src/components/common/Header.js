import React from "react";
import { Text, View } from "react-native";

export const Header = (props) => {
  return (
    <View style={[styles.headerStyle, props.headerStyle]}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.heading}</Text>
    </View>
  );
};

const styles = {
    headerStyle:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 20,
    },
    textStyle:{
        fontSize: 50,
        fontFamily: "Futura-Medium"
    }
}

