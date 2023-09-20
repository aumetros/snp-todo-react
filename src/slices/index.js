import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice.js';
import filterReducer from './filtersSlice.js';
import localStorageMiddleware from '../middlewares/localStorageMiddleware.js';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
