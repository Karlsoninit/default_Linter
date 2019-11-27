import React from "React";
import { Text, View, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "tomato",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40
  },
  title: {
    fontSize: 20
  }
});

export default Header;
