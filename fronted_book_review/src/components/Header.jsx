import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/edit-book">Edit Book</Link>
        <Link to="/delete-book">Delete Book</Link>
      </nav>
    </header>
  );
};

export default Header;
