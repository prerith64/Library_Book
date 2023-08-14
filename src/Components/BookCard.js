import React, { useState } from 'react';

const BookCard = ({ book, addToLibrary }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToLibrary = () => {
    addToLibrary(book);
    setIsAdded(true);
  };

  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <img
          src={book.coverImage}
          className="card-img-top"
          alt={book.title}
          style={{
            objectFit: 'contain',
            height: '200px',
            marginBottom: '10px', // Add margin at the bottom
          }}
        />
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        <p className="card-text">Genre: {book.genre}</p>
        <p className="card-text">Publication Date: {book.publicationDate}</p>
        {!isAdded ? (
          <button className="btn btn-primary" onClick={handleAddToLibrary}>
            Add to Library
          </button>
          
        ) : (
          <p className="text-success">Added to Library</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
