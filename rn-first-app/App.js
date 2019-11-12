import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  console.log("app");
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>default assembly</Text>
      <Text style={styles.descriptions}>
        before create new project, you can create new branch and use default
        assembly
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  textStyle: {
    color: "tomato",
    fontSize: 30,
    marginBottom: 20
  },
  descriptions: {
    fontSize: 12,
    color: "black"
  }
});

export default App;
