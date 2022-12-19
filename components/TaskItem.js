import { StyleSheet, View, Text, Button } from 'react-native';

export default function TaskItem({text, id}) {
  
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.listText}>{capitalize(text)}</Text>
      <Button
        title='❌'
        id={id}
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