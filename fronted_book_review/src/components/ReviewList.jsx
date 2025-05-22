import React from 'react';

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No reviews yet. Be the first to review this book!</p>;
  }

  return (
    <div className="review-list">
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review._id} className="review-item">
          <p><strong>{review.reviewer}</strong></p>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;