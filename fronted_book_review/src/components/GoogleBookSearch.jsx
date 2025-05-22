import React, { useState } from 'react';
import { fetchBookDataFromGoogle } from '../api/api';

const GoogleBookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetchBookDataFromGoogle(query)
      .then((data) => {
        setBooks(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        setError('There was an error fetching data from Google Books API!');
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter title, author or ISBN"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="search-results">
        {books.map((book) => (
          <div key={book.id} className="search-result-item">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleBookSearch;