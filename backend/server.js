import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { uri } from './atlas_uri.js'; // Import the MongoDB URI
import routes from './routes/routes.js'; // Import the routes

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
const main = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
  }
};
main();

// Use API Routes
routes(app); // Pass the app instance to routes.js

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});