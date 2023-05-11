import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <div key={book.item_id}>
        <h2>{book.title}</h2>
        <p>
          Author:
          {book.author}
        </p>
        <p>
          Category:
          {book.category}
        </p>
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
