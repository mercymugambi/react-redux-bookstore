// Book.js
import React from "react";

const Book = ({ book, onDelete }) => {
  const { title, author, id } = book;

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Book;
