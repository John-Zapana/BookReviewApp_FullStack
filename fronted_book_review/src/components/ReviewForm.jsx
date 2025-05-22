import React, { useState } from 'react';
import API from '../api/api';

const ReviewForm = ({ bookId, onReviewAdded }) => {
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { reviewer, rating, comment };
    API.post(`/books/${bookId}/reviews`, newReview)
      .then((response) => {
        onReviewAdded(response.data);
        setReviewer('');
        setRating(1);
        setComment('');
      })
      .catch((error) => {
        console.error('There was an error adding the review!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="form-group">
        <label>Reviewer</label>
        <input
          type="text"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="form-control"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Review</button>
    </form>
  );
};

export default ReviewForm;