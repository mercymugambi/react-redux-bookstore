import React, { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <hr className="Horizontalrule"></hr>
      <h2>Add New Book</h2>
      <form className="formContainer" onSubmit={handleSubmit}>
      <label>
        <input type="text" value={title} placeholder = "Title" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <input type="text" value={author} placeholder = "Author" onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
    </div>
  );
};

export default Form;
