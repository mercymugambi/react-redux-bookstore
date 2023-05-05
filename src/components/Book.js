import React from "react";

const Book = ({ book, onDelete }) => {
  const { title, author, id } = book;

  return (
    <div className="BookContainer">
      <li className="booksLi">
      <h3 className="Booktitle">{title}</h3>
      <p className="BookAuthor">Author: {author}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      </li>
      
    </div>
  );
};

export default Book;
