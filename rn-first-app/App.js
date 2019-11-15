import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header/Header";
import Screen from "./components/Screens/Screens";

const App = () => {
  console.log("guess number");
  return (
    <View style={styles.container}>
      <Header title={"guess game"} />
      <Screen />
    </View>
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
