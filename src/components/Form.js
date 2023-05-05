import React, { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <hr className="Horizontalrule" />
      <h2 className="Newbook">Add New Book</h2>
      <form className="formContainer" onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
