import React from "react";
import { View, StyleSheet } from "react-native";
const Card = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    elevation: 5,
    borderRadius: 10
  }
});

export default Card;
