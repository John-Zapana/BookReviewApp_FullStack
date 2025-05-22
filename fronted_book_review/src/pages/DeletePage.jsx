import React, { useState, useEffect } from 'react';
import API from '../api/api';
import deleteImage from '../images/delete.png'; // Import the image
import '../styles/Delete.css'; // Import the new CSS file

const DeletePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/books')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('There was an error fetching the books!');
        setLoading(false);
      });
  }, []);

  const handleDelete = (bookId) => {
    API.delete(`/books/${bookId}`)
      .then(() => {
        setBooks(books.filter(book => book._id !== bookId));
      })
      .catch((error) => {
        console.error('There was an error deleting the book!', error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="delete-book-page-container">
      <header className="delete-book-page-header">
        <h1 className="delete-book-page-title">Delete a Book</h1>
      </header>

      <div className="delete-book-page-image-container">
        <img
          src={deleteImage} // Use the imported image
          alt="Delete Book"
          className="delete-book-page-image"
        />
      </div>

      <div className="delete-book-page-content">
        {books.map((book) => (
          <div key={book._id} className="book-list-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => handleDelete(book._id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeletePage;