import { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Context } from '../Context/Context';

export default function TaskItem({text, id}) {
  const { taskList } = useContext(Context);
  const [listing, setListing] = taskList;

  const removeTask = (id) => {
    const newList = listing.filter((item) => item.id !== id);
    setListing(newList);
  }
  
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.listText}>{capitalize(text)}</Text>
      <Button
        title='❌'
        onPress={() => removeTask(id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listText: {
    fontSize: 16,
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})