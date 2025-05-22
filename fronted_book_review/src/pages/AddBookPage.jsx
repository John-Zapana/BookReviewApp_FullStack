import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import API from '../api/api';
import addImage from '../images/add.png';
import '../styles/Add.css'; // Import the new CSS file

const AddBookPage = () => {
  const [message, setMessage] = useState('');

  const handleSave = (book, clearForm) => {
    API.post('/books', book)
      .then((response) => {
        setMessage('Book saved successfully!');
        clearForm();
        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        console.error('There was an error creating the book!', error);
        setMessage('Failed to save the book.');
        setTimeout(() => setMessage(''), 4000); // Clear message after 4 seconds
      });
  };

  return (
    <div className="add-book-page-container">
      <header className="add-book-page-header">
        <h1 className="add-book-page-title">Add a New Book</h1>
      </header>

      <div className="add-book-page-image-container">
        <img
          src={addImage} // Use the imported image
          alt="Add a New Book"
          className="add-book-page-image"
        />
      </div>

      <div className="add-book-page-content">
        {message && <p className="message">{message}</p>}
        <BookForm onSave={handleSave} />
      </div>
    </div>
  );
};

export default AddBookPage;