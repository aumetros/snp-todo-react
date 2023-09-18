import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      const { task } = action.payload;
      state.push(task);
    }
  }
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;