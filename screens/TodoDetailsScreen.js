import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoDetailsScreen = ({ route }) => {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Details</Text>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.text}>{todo.title}</Text>
      <Text style={styles.label}>Status:</Text>
      <Text style={[styles.status, { color: todo.completed ? 'green' : 'red' }]}>
        {todo.completed ? 'Completed' : 'Pending'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoDetailsScreen;
