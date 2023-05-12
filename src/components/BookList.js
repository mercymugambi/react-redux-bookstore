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
    <div className="BookContainer">
      <ul className="booksUl">
        {books.map((book) => (
          <li className="booksLi" key={book.item_id}>
            <h3 className="Booktitle">{book.title}</h3>
            <p className="BookAuthor">
              {book.author}
            </p>
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
