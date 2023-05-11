import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BooksList = ({ books }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

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
            {' '}
            -
            {book.category}
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
