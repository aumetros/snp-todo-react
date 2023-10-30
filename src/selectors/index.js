import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectTasks = (state) => state.tasks;

export const selectActiveTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((task) => !task.complete)
);

export const selectCompleteTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((task) => task.complete)
);
