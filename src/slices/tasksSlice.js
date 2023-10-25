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
      return state.map((task) => {
        if (task.id === payload) {
          return {
            ...task,
            complete: !task.complete,
          };
        }

        return task;
      });
    },
    deleteTask(state, { payload }) {
      return state.filter((task) => task.id !== payload);
    },
    editTask(state, { payload }) {
      const { taskId, text } = payload;
      return state.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            title: text,
          };
        }
        return task;
      });
    },
    clearCompleteTasks(state) {
      return state.filter((task) => task.complete !== true);
    },
    clearAllTasks(state) {
      state.splice(0, state.length);
    },
    checkAllTasks(state) {
      return state.map((task) => {
        return {
          ...task,
          complete: true,
        };
      });
    },
    uncheckAllTasks(state) {
      return state.map((task) => {
        return {
          ...task,
          complete: false,
        };
      });
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
