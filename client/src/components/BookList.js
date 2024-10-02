import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5010/books/')
      .then(response => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5010/books/${id}`)
      .then(response => {
        console.log(response.data);
        setBooks(books.filter(el => el._id !== id));
      });
  }

  return (
    <div className="book-list">
      <h3>Books</h3>
      {books.map(book => (
        <div key={book._id} className="book-card">
          <div className="book-info">
            <h4 className="book-title">{book.title}</h4>
            <p className="book-author">By {book.author}</p>
            <div className="book-progress">
              <p>Page {book.currentPage} of {book.totalPages}</p>
              <progress value={book.currentPage} max={book.totalPages}></progress>
            </div>
            <div className="book-actions">
              <Link to={"/edit/"+book._id}>Edit</Link>
              <button onClick={() => deleteBook(book._id)} className="delete-button">Delete</button>
            </div>
          </div>
          <div className="book-cover-container">
            <img 
              src={book.coverImage || '/path/to/default-cover.jpg'} 
              alt={`Cover of ${book.title}`}
              className="book-cover-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/path/to/default-cover.jpg'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default BookList; 