import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: "tasks",
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
    },
    editTask(state, { payload }) {
      const { taskId, text } = payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.task = text;
      }
    },
    clearCompleteTasks(state) {
      return state.filter((task) => task.complete !== true);
    },
    clearAllTasks(state) {
      state.splice(0, state.length);
    },
    checkAllTasks(state) {
      state.forEach((task) => task.complete = true);
    },
    uncheckAllTasks(state) {
      state.forEach((task) => task.complete = false);
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  clearCompleteTasks,
  clearAllTasks,
  checkAllTasks,
  uncheckAllTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
