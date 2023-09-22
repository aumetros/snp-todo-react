import { createSlice } from '@reduxjs/toolkit';

const initialState = { status: 'active' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
       state.status = payload;
    }
  }
})

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer