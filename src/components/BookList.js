// BookList.js
import React, { useState } from "react";
import Book from "./Book";
import Form from "./Form";

const BookList = ({ books }) => {
  const [bookList, setBookList] = useState(books);

  const deleteBook = (id) => {
    const updatedBookList = bookList.filter((book) => book.id !== id);
    setBookList(updatedBookList);
  };

  return (
    <div>
      {bookList?.map((book) => (
        <Book key={book.id} book={book} onDelete={deleteBook} />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
