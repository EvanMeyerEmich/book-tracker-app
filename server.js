const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5010;  // Changed to 5001

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // or '*' to allow all origins
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

// Define routes
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
