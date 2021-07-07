import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "./NumberContainer";
import Card from "../components/Card";

const generatorRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log("rndNumber", "---->", rndNumber);
  if (rndNumber === exclude) {
    return generatorRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
  console.log("test return generatorRandomNumber --->", generatorRandomNumber);
  console.log("test return ---> rndNumber", rndNumber);
};

const ScreenGame = props => {
  const [currentUser, setCurrentUser] = useState(
    generatorRandomNumber(1, 100, props.userChoice)
  );

  return (
    <View style={styles.gameContainer}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentUser}</NumberContainer>
      <Card style={styles.buttonConatainer}>
        <Button title="LOWER" onPress={() => console.log("LOWER")} />
        <Button title="GREATER" onPress={() => console.log("LOWER")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonConatainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  gameContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default ScreenGame;
