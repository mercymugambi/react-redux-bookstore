import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            {' '}
            by
            {book.author}
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
