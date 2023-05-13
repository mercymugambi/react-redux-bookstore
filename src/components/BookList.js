import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(deleteBookFromApi(itemId));
  };

  return (
    <div className="BookContainer">
      <ul className="booksUl">
        {books.map((book) => (
          <li className="booksLi" key={book.id}>
            <p className="BookCategory">{book.book.category}</p>
            <h3 className="Booktitle">{book.book.title}</h3>
            <p className="BookAuthor">{book.book.author}</p>
            <button type="button" onClick={() => handleRemoveBook(book.id)}>
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
