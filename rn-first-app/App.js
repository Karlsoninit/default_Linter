import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import StartScreensGame from "./components/StartScreensGame";
import ScreenGame from "./components/ScreenGame";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const userNumberHandler = num => {
    console.log(num);
    setUserNumber(num);
  };

  let content = <StartScreensGame onHandleUserNumber={userNumberHandler} />;

  if (userNumber) {
    content = <ScreenGame userChoice={userNumber} />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header title={"guess game"} />
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  }
});

export default App;
