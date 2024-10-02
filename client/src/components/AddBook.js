import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [currentPage, setCurrentPage] = useState('0');
  const [coverImage, setCoverImage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('totalPages', totalPages);
    formData.append('currentPage', currentPage);
    if (coverImage) {
      formData.append('coverImage', coverImage);
    }

    try {
      const res = await axios.post('http://localhost:5010/books/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
      // Clear form
      setTitle('');
      setAuthor('');
      setTotalPages('');
      setCurrentPage('0');
      setCoverImage(null);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  const handleImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  }

  return (
    <div>
      <h3>Add New Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text"
            required
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input type="text"
            required
            className="form-control"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Total Pages: </label>
          <input type="number"
            required
            className="form-control"
            value={totalPages}
            onChange={e => setTotalPages(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Current Page: </label>
          <input type="number"
            className="form-control"
            value={currentPage}
            onChange={e => setCurrentPage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Cover Image: </label>
          <input type="file"
            className="form-control-file"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Book" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default AddBook;