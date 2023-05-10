import { configureStore } from '@reduxjs/toolkit';
import booksSliceReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksSliceReducer,
  },
});

export default store;
