import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([])

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

  // const removeTask = (e) => {
  //   const { id } = e.tagert;
  //   const newList = list.filter((item) => item.id !== id);
  //   setList(newList);
  // }

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>REACT NATIVE TO-DO 📑</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={task}
          placeholder="What's next ?"
          onChangeText={handleChange}
        />
        <Button
          title='Add Task'
          onPress={addTask}
        />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 25
  },

  headerContainer: {
    padding: 10,
    marginTop: '15%',
  },

  headerText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center'
  },

  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },

  inputText: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '75%',
    marginRight: 5,
    textAlign: 'center',
    fontSize: 16,
  },

  listContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
    height: '80%'
  },
});
