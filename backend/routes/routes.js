import Book from '../models/Book.js';

export default (app) => {
  // GET all books
  app.get('/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // GET one book by ID
  app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: 'Cannot find book' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // CREATE a new book
  app.post('/books', async (req, res) => {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      description: req.body.description,
    });
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // UPDATE a book by ID
  app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Cannot find book' });
      }

      if (req.body.title != null) {
        book.title = req.body.title;
      }
      if (req.body.author != null) {
        book.author = req.body.author;
      }
      if (req.body.genre != null) {
        book.genre = req.body.genre;
      }
      if (req.body.description != null) {
        book.description = req.body.description;
      }

      const updatedBook = await book.save();
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // DELETE a book by ID
  app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Cannot find book' });
      }

      await book.deleteOne();
      res.json({ message: 'Deleted Book' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // ADD a review to a book
  app.post('/books/:id/reviews', async (req, res) => {
    const { id } = req.params;
    const review = {
      reviewer: req.body.reviewer,
      rating: req.body.rating,
      comment: req.body.comment,
      date: new Date(),
    };
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Cannot find book' });
      }

      book.reviews.push(review);
      const updatedBook = await book.save();
      res.status(201).json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};