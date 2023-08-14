import React, { useState } from 'react';
import BookCard from './BookCard';

const CardList = () => {
  const [library, setLibrary] = useState([]);
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Fiction',
      publicationDate: '2022-01-01',
    //   coverImage: 'https://via.placeholder.com/150',
    },
    // Add more book objects as needed
  ];

  const addToLibrary = (book) => {
    setLibrary([...library, book]);
  };

  return (
    <div className="container mt-4">
      <h1>Library</h1>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book.id}>
            <BookCard book={book} addToLibrary={addToLibrary} />
          </div>
        ))}
      </div>
      <h2>Your Library</h2>
      <ul>
        {library.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
