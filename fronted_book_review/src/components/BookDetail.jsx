import React, { useState, useEffect } from 'react';
import API from '../api/api';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const BookDetail = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get(`/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('There was an error fetching the book details!');
        setLoading(false);
      });
  }, [bookId]);

  const handleReviewAdded = (updatedBook) => {
    setBook(updatedBook);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-detail-content">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">{book.author}</p>
      <p className="book-genre">{book.genre}</p>
      <p className="book-description">{book.description}</p>      
      <ReviewList reviews={book.reviews} />
      <ReviewForm bookId={book._id} onReviewAdded={handleReviewAdded} />
    </div>
  );
};

export default BookDetail;