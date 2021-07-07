import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 10,
    textAlign: "center"
  }
});

export default Input;
