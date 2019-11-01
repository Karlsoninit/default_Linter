import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Open up App.js to start working on your first app !
//       </Text>
//       <Button title="click me please" onPress={this.handlePress} />
//     </View>
//   );
// }

export default class App extends Component {
  state = {
    isOpen: false
  };

  handlePress = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };
  render() {
    const { isOpen } = this.state;
    return (
      <View style={styles.container}>
        {isOpen && (
          <Text style={styles.text}>
            Open up App.js to start working on your first app !
          </Text>
        )}
        <Button title="click me please" onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  },
  text: {
    color: "red"
  }
});
