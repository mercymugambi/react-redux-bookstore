import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import AddBook from './AddBook';
import 'react-circular-progressbar/dist/styles.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(deleteBookFromApi(itemId));
  };

  return (
    <div className="booksUl">
      {books.map((book) => (
        <li className="Lesson-Panel" key={book.id}>
          <div className="firstColumn">
            <p className="School-of">{book.book.category}</p>
            <h3 className="Title">{book.book.title}</h3>
            <p className="BookAuthor">{book.book.author}</p>
            <div className="footer">
              <span className="Comments Text-Style-8">
                Comments
              </span>
              <div className="Line-2" />
              <button className="Remove" type="button" onClick={() => handleRemoveBook(book.id)}>
                Remove
              </button>
              <div className="Line-2" />
              <span className="Edit Text-Style-8">
                Edit
              </span>
            </div>
          </div>
          <div className="Oval">
            <CircularProgressbar className="Oval-2" value={67} text={`${67}%`} />
            <div className="progress">
              <span className="Percent-Complete">
                64%
              </span>
              <span className="Completed Text-Style-2">
                Completed
              </span>
            </div>
          </div>
        </li>
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
