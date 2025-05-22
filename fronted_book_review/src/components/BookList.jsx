import React, { useState, useEffect } from 'react';
import API from '../api/api';

const BookList = ({ onBookSelect }) => {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          key={book._id}
          className="book-list-item"
          onClick={() => onBookSelect(book._id)}
        >
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;