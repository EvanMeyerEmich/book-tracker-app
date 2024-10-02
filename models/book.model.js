const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, default: 0 },
  coverImage: { type: String }  // New field for cover image URL
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;