import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooksToApi } from '../redux/books/booksSlice';
import Dropdowns from './Dropdowns';

const RandomIdgenerator = () => {
  const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 5;

  let randomId = '';
  for (let i = 0; i < idLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
    randomId += alphanumericCharacters[randomIndex];
  }

  return randomId;
};

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleAddBook = (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!title || !author) {
      return;
    }

    const newBook = {
      item_id: RandomIdgenerator(),
      title,
      author,
      category,
    };
    dispatch(addBooksToApi(newBook))
      .then(() => {
        setTitle('');
        setAuthor('');
      });
  };

  return (
    <div className="addbookcontainer">
      <hr className="Horizontalrule" />
      <h2 className="Newbook">Add New Book</h2>
      <form className="formContainer">
        <input type="text" className="bookTitle" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="bookAuthor" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <Dropdowns category={category} onCategoryChange={handleCategoryChange} />
        <button type="button" className="Rectangle-3" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
