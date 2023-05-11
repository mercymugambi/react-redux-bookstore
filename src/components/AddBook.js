import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!title || !author) {
      return; // Do not proceed if the title or author fields are empty
    }

    const newBook = {
      item_id: `item${Math.floor(Math.random() * 100)}`,
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <hr className="Horizontalrule" />
      <h2 className="Newbook">Add New Book</h2>
      <form className="formContainer">
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
