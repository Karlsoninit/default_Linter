import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [createTask, setCreateTask] = useState("");

  const handelSubmit = task => {
    setCreateTask(task);
  };

  const handlePress = () => {
    const task = {
      task: createTask,
      id: Math.floor(Math.random() * 100000)
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = id => {
    setTasks(getTask => {
      return getTask.filter(task => task.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handelSubmit}
          placeholder="enter some task ..."
          value={createTask}
        />
        <Button style={styles.btn} onPress={handlePress} title="add" />
      </View>
      <ScrollView>
        {tasks.map(elem => (
          <TouchableOpacity key={elem.id} onPress={() => deleteTask(elem.id)}>
            <View style={styles.taksListContainer} key={elem.id}>
              <Text>{elem.task}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  taksListContainer: {
    width: 300,
    backgroundColor: "grey",
    marginBottom: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "tomato"
  },
  inputContainer: {
    paddingTop: 50,
    flexDirection: "row"
  },
  input: {
    borderColor: "red",
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "tomato"
  },
  btn: {
    height: 50
  }
});
