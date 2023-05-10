import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // action
  },
});

export const { actions } = categoriesSlice;
export default categoriesSlice.reducer;
