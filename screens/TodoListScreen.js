import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { fetchTodos, toggleComplete } from '../store/todoSlice';

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const renderTodo = ({ item }) => (
    <TodoItem
      todo={item}
      onToggleComplete={() => dispatch(toggleComplete(item.id))}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default TodoListScreen;
