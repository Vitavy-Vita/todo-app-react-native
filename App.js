// rnfs
import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const size = useWindowDimensions();
const img = require("./assets/logo.png");

export default function App() {
  const [textEntered, setTextEntered] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);
  const addTask = function () {
    if (textEntered) {
      setTasks([...tasks, textEntered]);
    }
    toggleModal();
  };
  const deleteTask = function (index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapButton}>
          <Button
            title="Add new task"
            color={"#FFBD59"}
            onPress={toggleModal}
          />
        </View>
        <Modal visible={modalVisible}>
          <SafeAreaView style={styles.containerModal}>
            <Pressable>
              <AntDesign
                name="close"
                size={24}
                color="black"
                style={styles.closeButtonModal}
                onPress={toggleModal}
              />
              <Image source={img} style={styles.modalImage} />
            </Pressable>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, { width: size.width - 60 }]}
                onChangeText={(text) => setTextEntered(text)}
                autoFocus
                autoCorrect
                value={textEntered}
                color={"#FFBD59"}
              />
              <Button color={"#FFBD59"} title="Add task..." onPress={addTask} />
            </View>
          </SafeAreaView>
        </Modal>
        {/* List of tasks */}
        <ScrollView style={styles.tasksContainer}>
          {tasks.map((item, index) => (
            <Pressable
              onLongPress={() => deleteTask(index)}
              style={styles.task}
              key={index}
            >
              <Text style={styles.taskText}>{item}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31356E",
    paddingHorizontal: 30,
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
  },
  wrapButton: {
    paddingTop: 30,
  },
  containerModal: {
    position: "relative",
    flex: 1,
  },
  modalImage: {
    position: "absolute",
    top: 30,
    left: 170,
  },
  closeButtonModal: {
    position: "absolute",
    right: 40,
    top: 30,
  },
  inputContainer: {
    position: "absolute",
    flex: 0.75,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    top: 170,
    left: 20,
  },
  input: {
    width: "70%",
    borderWidth: 2,
    borderColor: "#c8C8C8",
    color: "white",
    paddingHorizontal: 10,
  },
  tasksContainer: {
    flex: 4,
  },
  task: {
    backgroundColor: "#5762B7",
    paddingVertical: 8,
    marginTop: 5,
    borderRadius: 4,
  },
  taskText: {
    textAlign: "center",
    color: "white",
  },
});
