import React from 'react';
import GoogleBookSearch from '../components/GoogleBookSearch';
import homeImage from '../images/home.png'; // Import the image
import '../styles/Home.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Title Section */}
      <header className="homepage-header">
        <h1 className="homepage-title">Welcome to the Book Review App</h1>
      </header>

      {/* Image Section */}
      <div className="homepage-image-container">
        <img
          src={homeImage} // Use the imported image
          alt="Bookshelf"
          className="homepage-image"
        />
      </div>

      {/* Description Section */}
      <div className="homepage-description-container">
        <h2 className="homepage-subtitle">About the App</h2>
        <p className="homepage-description">
          The Book Review App is a platform for book lovers to explore, review, and share their favorite books. 
          With features like adding books, writing reviews, and browsing a catalog of books, this app is designed 
          to foster a community of readers.
        </p>
        <h2 className="homepage-subtitle">Features</h2>
        <p className="homepage-description">
          This app encourages reading and sharing thoughts on books, integrates external APIs for enhanced functionality, 
          and provides a seamless user experience for managing books and reviews.
        </p>
      </div>

      {/* Google Book Search Section */}
      <div className="homepage-search">
        <h2 className="homepage-subtitle">Search for Books</h2>
        <p className="homepage-description">
          Use the search bar below to find books by title, author, or ISBN. Our app integrates with the Google Books API 
          to fetch book details that you may not remember.
        </p>
        <GoogleBookSearch />
      </div>
    </div>
  );
};

export default HomePage;