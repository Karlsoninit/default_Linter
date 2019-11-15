import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Input from "../Input/Input";
import Card from "../Card/Card";
import variables from "../../color/color";

const Screen = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const getInputValue = textValue => {
    console.log(textValue);
    setEnteredValue(textValue.replace(/[^0-9]/g, ""));
  };

  const confirm = () => {
    console.log(enteredValue);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Start new game</Text>
        <Card>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={getInputValue}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.btn}
              title="Reset"
              onPress={() => console.log("reset")}
              color={variables.rejected}
            />
            <Button
              style={styles.btn}
              title="Confirm"
              onPress={() => console.log("Confirm")}
              color={variables.success}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center"
  },
  // inputContainer: {
  //   width: 400,
  //   maxWidth: "80%",
  //   alignItems: "center",
  //   shadowColor: "grey",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 6,
  //   shadowOpacity: 0.2,
  //   backgroundColor: "white",
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   elevation: 5,
  //   borderRadius: 10
  // },
  title: {
    fontSize: 25,
    color: "green",
    paddingTop: 10,
    marginBottom: 10
  },
  buttonContainer: {
    paddingTop: 20,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between"
  },
  btn: {
    width: 100,
    height: 40
  },
  input: {
    width: 50
  }
});

export default Screen;
