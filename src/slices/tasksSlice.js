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
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
