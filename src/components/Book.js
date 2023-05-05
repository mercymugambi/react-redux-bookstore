import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
  const { title, author, id } = book;

  return (
    <div className="BookContainer">
      <li className="booksLi">
        <h3 className="Booktitle">{title}</h3>
        <p className="BookAuthor">
          Author:
          {author}
        </p>
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
