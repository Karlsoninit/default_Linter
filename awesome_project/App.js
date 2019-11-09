import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [getTask, getTaskState] = useState([]);
  const [aloneTask, aloneTaskState] = useState("");
  const [isOpen, isOpenState] = useState(false);

  const handelSubmit = evt => {
    aloneTaskState(evt);
  };

  const handlePress = () => {
    const task = {
      task: aloneTask,
      id: Math.floor(Math.random() * 100000)
    };
    getTaskState([...getTask, task]);
    console.log(getTask);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handelSubmit}
        placeholder="enter some task ..."
      />
      <Button onPress={handlePress} title="add" />
      {getTask.map(elem => (
        <View key={elem.id}>
          <Text>{elem.task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
