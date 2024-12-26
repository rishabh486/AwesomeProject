import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = {
  todos: [],
  loading: false,
  error: null,
};

// Async Thunk to fetch TODOs
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data.slice(0, 10); // Fetch first 10 todos for brevity
});

// Slice Definition
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleComplete(state, action) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

// Exports
export const { toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
