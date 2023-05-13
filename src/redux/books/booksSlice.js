import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S2qSBSAJQj5TKTKJHsyZ/books';

const getBooks = createAsyncThunk('books/getBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    const booksWithId = Object.entries(response.data).map(([id, book]) => ({
      id,
      book: book[0],
    }));
    return booksWithId;
  } catch (error) {
    return rejectWithValue('Something went wrong');
  }
});

const addBooksToApi = createAsyncThunk('book/addbooks', async ({ ...bookObj }, thunkAPI) => {
  const newBook = { ...bookObj };
  try {
    await axios.post(url, newBook);
    const response = thunkAPI.dispatch(getBooks());
    return response;
  } catch (error) {
    throw new Error('could not add book at the moment');
  }
});

const deleteBookFromApi = createAsyncThunk('books/deleteBookFromApi', async (itemId) => {
  const deleteUrl = `${url}/${itemId}`;
  try {
    await axios.delete(deleteUrl);
    return itemId;
  } catch (error) {
    throw new Error('Error deleting the book');
  }
});

const initialState = {
  books: [],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBooksToApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBooksToApi.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBooksToApi.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBookFromApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBookFromApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBookFromApi.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { getBooks, addBooksToApi, deleteBookFromApi };
export default booksSlice.reducer;
