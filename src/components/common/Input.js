import React from "react";
import { Text, View, TextInput } from "react-native";

export const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyles, labelStyles, containerStyles } = styles;
  return (
    <View style={containerStyles}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        style={inputStyles}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40
  },
  labelStyles: {
    marginRight: 20,
    fontSize: 25,
    flex: 1
  },
  inputStyles: {
    flex: 2,
    height: 40,
    borderColor: "#DCDCDC",
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5
  }
};
