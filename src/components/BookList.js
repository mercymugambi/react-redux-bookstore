import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Book from './Book';
import Form from './Form';

const BookList = ({ books }) => {
  const [bookList, setBookList] = useState(books);

  const deleteBook = (id) => {
    const updatedBookList = bookList.filter((book) => book.id !== id);
    setBookList(updatedBookList);
  };

  return (
    <div>
      {bookList?.map((book) => (
        <div key={book.id} style={{ display: 'flex' }}>
          <Book book={book} onDelete={deleteBook} />
        </div>
      ))}
      <Form />
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
