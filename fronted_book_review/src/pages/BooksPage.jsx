import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';
import listImage from '../images/list.png';
import '../styles/Books.css'; // Import the CSS file

const BooksPage = () => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleBookSelect = (bookId) => {
    setSelectedBookId(bookId);
  };

  return (
    <div className="books-page-container">
      <header className="books-page-header">
        <h1 className="books-page-title">List of Books</h1>
      </header>

      <div className="books-page-image-container">
        <img
          src={listImage} // Use the imported image
          alt="List of Books"
          className="books-page-image"
        />
      </div>

      <div className="books-page-content">
        <div className="book-list-container">
          <BookList onBookSelect={handleBookSelect} />
        </div>
        <div className="book-detail">
          {selectedBookId ? (
            <div className="book-detail-content">
              <BookDetail bookId={selectedBookId} />
            </div>
          ) : (
            <p>Select a book from the left side to see details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;