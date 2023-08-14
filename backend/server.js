const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publicationDate: String,
  coverImage: String,
});

const Book = mongoose.model('Book', BookSchema);

app.get('/api/books', async (req, res) => {
  const { title, author, genre } = req.query;
  const filters = {};
  
  if (title) filters.title = title;
  if (author) filters.author = author;
  if (genre) filters.genre = genre;

  try {
    const books = await Book.find(filters);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving books' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
