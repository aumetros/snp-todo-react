import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice.js';
import filterReducer from './filtersSlice.js';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
