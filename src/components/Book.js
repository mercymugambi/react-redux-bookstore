import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
  const { title, author, id } = book;

  return (
    <div className="BookContainer">
      <ul className="booksUl">
        <li className="booksLi">
          <h3 className="Booktitle">{title}</h3>
          <p className="BookAuthor">
            {author}
          </p>
          <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
        <p>50% completed</p>
        <div>
          <h3>Current Chapter</h3>
          <p>Chapter 23</p>
        </div>
      </ul>

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
