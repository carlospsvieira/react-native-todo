import { useState } from 'react';
import { styles } from './styles'
import {
  Pressable,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
} from 'react-native';
import TaskItem from './components/TaskItem';
import { Context } from './Context/Context';

export default function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([])
  const [visible, setVisible] = useState(false);

  const handleChange = (enteredText) => {
    setTask(enteredText);
  };

  const addTask = () => {
    if (task === '') {
      alert('Please, compose a task.')
    } else {
      setList((prevTask) => [
        ...prevTask,
        { text: task, id: Math.random().toString() }
      ])
      setTask('');
    }
  };

  return (
    <Context.Provider value={{ taskList: [list, setList] }}>
      {!visible && <Modal>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Pressable
            style={({ pressed }) => pressed ? styles.wasPressed : styles.modalBtn}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.modalText}>START</Text>
          </Pressable>
        </View>
      </Modal>}
      <View style={styles.appContainer}>
        <Pressable
          style={styles.closeContainer}
          onPress={() => setVisible(false)}
        >
          <Text style={styles.closeIcon}>🔏</Text>
        </Pressable>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>REACT NATIVE TO-DO 📑</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={task}
            placeholder="What's next ?"
            onChangeText={handleChange}
            onSubmitEditing={addTask}
          />
          <Pressable style={styles.addBtn} onPress={addTask}>
            <Text style={styles.btnText}>ADD TASK</Text>
          </Pressable>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              )
            }}
            keyExtractor={(item) => item.id}
          >

          </FlatList>
        </View>
      </View>
    </Context.Provider>
  );
}
