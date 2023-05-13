// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S2qSBSAJQj5TKTKJHsyZ';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseURL}/books`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(`${baseURL}/books`, book);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
};

export const removeBook = async (bookId) => {
  try {
    const response = await axios.delete(`${baseURL}/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to remove book');
  }
};
