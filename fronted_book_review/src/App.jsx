import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import DeletePage from './pages/DeletePage';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/books" element={<BooksPage />} />
          <Route path="/add-book" element={<AddBookPage />} />          
          <Route path="/edit-book" element={<EditBookPage />} />
          <Route path="/delete-book" element={<DeletePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
