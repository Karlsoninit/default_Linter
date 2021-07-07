import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, Keyboard } from "react-native";
import Input from "./Input";
import Card from "./Card";
import variables from "../color/color";
import ButtonContainer from "./NumberContainer";

const StartScreensGame = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setСonfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const getInputValue = textValue => {
    // console.log(textValue);
    // setEnteredValue(textValue.replace(/[^0-9]/g, ""));
    setEnteredValue(textValue);
  };

  const resetInput = () => {
    setEnteredValue("");
    setСonfirmed(false);
  };

  const confirmInputHandler = () => {
    // console.log("print enteredValue", enteredValue);
    // console.log("print enteredValue change isNaN", isNaN(enteredValue));
    // console.log("print enteredValue change is more then 0", !enteredValue > 0);
    if (isNaN(enteredValue) || !enteredValue > 0) {
      Alert.alert("Invalid number", "alert has been only numbers", [
        { text: "Try again", onPress: () => resetInput, style: "cancel" }
      ]);
      setEnteredValue("");
      setСonfirmed(false);
      return;
    }
    setСonfirmed(true);
    setSelectedNumber(enteredValue);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    console.log("show", selectedNumber);
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <ButtonContainer>{selectedNumber}</ButtonContainer>
        <Button
          title="START GAME"
          onPress={() => props.onHandleUserNumber(selectedNumber)}
        />
      </Card>
    );
  }

  return (
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
            onPress={resetInput}
            color={variables.rejected}
          />
          <Button
            style={styles.btn}
            title="Confirm"
            onPress={confirmInputHandler}
            color={variables.success}
          />
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center"
  },
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
  },
  summaryContainer: {
    width: 150,
    marginTop: 20
  }
});

export default StartScreensGame;
