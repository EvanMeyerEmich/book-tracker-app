import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [currentCoverImage, setCurrentCoverImage] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5010/books/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
        setCurrentCoverImage(response.data.coverImage);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

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
      const res = await axios.post(`http://localhost:5010/books/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  }

  const handleImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  }

  return (
    <div>
      <h3>Edit Book</h3>
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
          {currentCoverImage && (
            <img src={currentCoverImage} alt="Current cover" style={{maxWidth: '200px', marginBottom: '10px'}} />
          )}
          <input type="file"
            className="form-control-file"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Book" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default EditBook;