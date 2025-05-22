import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import BookForm from '../components/BookForm';
import editImage from '../images/edit.png'; // Import the image
import '../styles/Edit.css'; // Import the new CSS file

const EditBookPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  const handleEditClick = (book) => {
    setSelectedBook(book);
  };

  const handleSave = (updatedBook) => {
    API.put(`/books/${selectedBook._id}`, updatedBook)
      .then((response) => {
        console.log('Book updated:', response.data);
        setMessage('Book updated successfully!');
        setTimeout(() => {
          setMessage('');
          setSelectedBook(null);
          // Refresh the book list
          API.get('/books')
            .then((response) => {
              setBooks(response.data);
            })
            .catch((error) => {
              console.error('There was an error fetching the books!', error);
            });
        }, 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        console.error('There was an error updating the book!', error);
        setMessage('Failed to update the book.');
        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      });
  };

  return (
    <div className="edit-book-page-container">
      <header className="edit-book-page-header">
        <h1 className="edit-book-page-title">Edit a Book</h1>
      </header>

      <div className="edit-book-page-image-container">
        <img
          src={editImage} // Use the imported image
          alt="Edit Book"
          className="edit-book-page-image"
        />
      </div>

      <div className="edit-book-page-content">
        {message && <p className="message">{message}</p>}
        {selectedBook ? (
          <BookForm book={selectedBook} onSave={handleSave} />
        ) : (
          <div>            
            <ul className="book-list">
              {books.map((book) => (
                <li key={book._id} className="book-list-item">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <button onClick={() => handleEditClick(book)} className="edit-button">Edit</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBookPage;