import axios from 'axios';

// Backend API
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Google Books API
const GOOGLE_BOOKS_API_KEY = 'AIzaSyDs_1pCyb8cFbbzurh16oShwVuiw0LoOgQ';
const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

// Fetch book data from Google Books API based on ISBN or title
export const fetchBookDataFromGoogle = (query) => {
  return axios.get(`${GOOGLE_BOOKS_API_URL}?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('There was an error fetching data from Google Books API!', error);
      throw error;
    });
};

export default API;