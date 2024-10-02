const router = require('express').Router();
let Book = require('../models/book.model');

// GET all books, sorted by creation date (newest first)
router.route('/').get((req, res) => {
  Book.find().sort({ createdAt: -1 })
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST a new book
router.route('/add').post((req, res) => {
  const { title, author, totalPages, currentPage, coverImage } = req.body;
  
  const newBook = new Book({
    title,
    author,
    totalPages,
    currentPage: currentPage || 0,
    coverImage
  });

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET a specific book
router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE a book
router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE a book
router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.title = req.body.title;
      book.author = req.body.author;
      book.totalPages = Number(req.body.totalPages);
      book.currentPage = Number(req.body.currentPage);
      book.coverImage = req.body.coverImage;

      book.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;