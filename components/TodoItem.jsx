import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, onToggleComplete }) => {
  return (
    <TouchableOpacity onPress={onToggleComplete}>
      <View style={styles.todoItem}>
        <Text style={styles.text}>{todo.title}</Text>
        <Text style={[styles.status, { color: todo.completed ? 'green' : 'red' }]}>
          {todo.completed ? 'Completed' : 'Pending'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  status: {
    fontWeight: 'bold',
  },
});

export default TodoItem;
