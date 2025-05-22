import mongoose from 'mongoose';

// Schemas
const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: String,
    required: [true, 'Reviewer name is required'],
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    required: [true, 'Rating is required'],
  },
  comment: {
    type: String,
    maxlength: [500, 'Comment cannot exceed 500 characters'],
  },
  date: { type: Date, default: Date.now },
});

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
    },
    description: {
      type: String,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    reviews: [reviewSchema], // Nested reviews
  },
  { versionKey: false } // Disable __v field
);

const Book = mongoose.model('Book', bookSchema);

export default Book;