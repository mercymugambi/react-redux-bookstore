import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/abc123/books');
  return response.data;
});

export const addBook = createAsyncThunk('books/addNewBook', async (bookData) => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/books', bookData);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/abc123/books/${bookId}`);

  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        state.filter((book) => book.item_id !== action.payload));
  },
});

export const booksReducer = booksSlice.reducer;
export default booksSlice.actions;
