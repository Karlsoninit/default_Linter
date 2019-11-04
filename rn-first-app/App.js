import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

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

// export default class App extends Component {
//   state = {
//     isOpen: false
//   };

//   handlePress = () => {
//     this.setState(({ isOpen }) => ({
//       isOpen: !isOpen
//     }));
//   };
//   render() {
//     const { isOpen } = this.state;
//     return (
//       <View style={styles.container}>
//         {isOpen && <Text style={styles.text}>work</Text>}
//         <View>
//           <Button title="click me please" onPress={this.handlePress} />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "red"
//   },
//   text: {
//     color: "red"
//   }
// });

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [tasks, setTasks] = useState([]);

  const getValue = evt => {
    setEnteredGoal(evt);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (enteredGoal !== "") {
      setTasks([...tasks, enteredGoal]);
    }
    setEnteredGoal("");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextInput
        placeholder="enter some word ..."
        value={enteredGoal}
        onChangeText={getValue}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {tasks.map((task, indx) => (
        <View style={styles.taskContainer}>
          <Text key={indx}>{task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    backgroundColor: "yellow"
  }
});
