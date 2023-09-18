import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, { payload }) {
      state.push(payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
