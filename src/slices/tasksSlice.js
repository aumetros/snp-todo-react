import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, { payload }) {
      state.push(payload);
    },
    toggleTask(state, { payload }) {
      const task = state.find((task) => task.id === payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask(state, { payload }) {
      const task = state.find((task) => task.id === payload);
      if (task) {
        state.splice(state.indexOf(task), 1);
      }
      
    }
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
