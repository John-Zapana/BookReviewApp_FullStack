import React, { useState } from 'react';

const BookForm = ({ book, onSave }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [genre, setGenre] = useState(book ? book.genre : '');
  const [description, setDescription] = useState(book ? book.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, description };
    onSave(newBook, clearForm);
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setGenre('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>      
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default BookForm;