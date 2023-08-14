import React, { useState } from 'react';
import './Library.css';
const Library = () => {
  const initialBooks = [
    {
        id: 1,
        title: 'Let Us C',
        author: 'YASHAVENT KANETKAR',
        genre:'programming language ',
        publicationDate: '2022-01-01',
        coverImage: 'https://rukminim2.flixcart.com/image/312/312/k4ehnrk0/regionalbooks/m/4/7/letus-c-authentic-guide-to-c-programming-language-original-imafnbh4gkzs8hnm.jpeg?q=70', // Replace with actual cover image URL
      },
      {
        id: 2,
        title: 'ANSI C',
        author: 'E Balagurusamy',
        genre:'programming language ',
        publicationDate: '2022-02-15',
        coverImage: 'https://rukminim2.flixcart.com/image/416/416/kj0bp8w0-0/book/s/s/r/programming-in-ansi-c-original-imafyzfyf2xjhwzz.jpeg?q=70', // Replace with actual cover image URL
      },
      {
        id: 3,
        title: 'OOP in c++',
        author: 'E Balagurusamy',
        genre:'programming language ',
        publicationDate: '2022-02-15',
        coverImage: 'https://rukminim2.flixcart.com/image/416/416/ke0a7ww0/book/1/8/6/object-oriented-programming-with-c-8th-edition-original-imafusm7hh2bfazz.jpeg?q=70', // Replace with actual cover image URL
      },
    //   {
    //     id: 4,
    //     title: 'Java the complete refrence',
    //     author: 'Schildt Herbert',
    //     genre:'programming language ',
    //     publicationDate: '2022-02-15',
    //     coverImage: 'https://rukminim2.flixcart.com/image/416/416/kjabs7k0-0/book/f/z/f/java-the-complete-reference-original-imafyw4smeydeqbn.jpeg?q=70', // Replace with actual cover image URL
    //   },
    //   {
    //     id: 5,
    //     title: 'The Crimes of Grindelwald ',
    //     author: 'Rowling J. K.',
    //     genre:'fantasy',
    //     publicationDate: '2022-02-15',
    //     coverImage: 'https://rukminim2.flixcart.com/image/416/416/l09w8sw0/book/o/k/c/fantastic-beasts-the-crimes-of-grindelwald-the-original-original-imagc36tjz6rhq8v.jpeg?q=70', // Replace with actual cover image URL
    //   },{
    //     id: 6,
    //     title: ' The Secrets of Dumbledore',
    //     author: 'fantasy',
    //     publicationDate: '2022-02-15',
    //     coverImage: 'https://rukminim2.flixcart.com/image/416/416/l1dwknk0/book/g/0/t/untitled-new-fiction-original-imagcye2qnfzhbdb.jpeg?q=70', // Replace with actual cover image URL
    //   },
    // // ... (other book objects)

  ];

  const [books, setBooks] = useState(initialBooks);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handlePublicationDateChange = (event) => {
    setPublicationDate(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.value);
  };

  const addBook = () =>  {
    if (title.trim() !== '') {
      const newBook = {
        title,
        author,
        genre,
        publicationDate,
        coverImage,
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
      setGenre('');
      setPublicationDate('');
      setCoverImage('');
    }
  };
  
  const editBook = (index) => {
    const bookToEdit = books[index];
    setTitle(bookToEdit.title);
    setAuthor(bookToEdit.author);
    setGenre(bookToEdit.genre);
    setPublicationDate(bookToEdit.publicationDate);
    setCoverImage(bookToEdit.coverImage);
    setEditIndex(index);
  };

  const updateBook = () => {
    if (editIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = {
        title,
        author,
        genre,
        publicationDate,
        coverImage,
      };
      setBooks(updatedBooks);
      setEditIndex(null);
      setTitle('');
      setAuthor('');
      setGenre('');
      setPublicationDate('');
      setCoverImage('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationDate('');
    setCoverImage('');
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    setEditIndex(null);
  };

  const filterBooks = () => {
    let filteredBooks = [...initialBooks];
    if (title) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (author) {
      filteredBooks = filteredBooks.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    if (genre) {
      filteredBooks = filteredBooks.filter((book) =>
        book.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }
    if (publicationDate) {
      filteredBooks = filteredBooks.filter((book) =>
        book.publicationDate.includes(publicationDate)
      );
    }
    setBooks(filteredBooks);
  };
  

  return (
    <div className="library-container">
      <h1 className='text-success'>LIBRARY</h1>
      <div className="input-container">
      <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={handleGenreChange}
        />
        <input
          type="text"
          placeholder="Publication Date"
          value={publicationDate}
          onChange={handlePublicationDateChange}
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={handleCoverImageChange}
        />
        {editIndex !== null ? (
          <div className="action-buttons">
            <button className="update-button  bg-primary" onClick={updateBook}>Update</button>
            <button className="cancel-button  bg-primary" onClick={cancelEdit}>Cancel</button>
          </div>
        ) : (
          <button className="add-button bg-primary" onClick={addBook}>Add Book</button>
        )}
      </div>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={handleGenreChange}
        />
        <input
          type="text"
          placeholder="Publication Date"
          value={publicationDate}
          onChange={handlePublicationDateChange}
        />
        <button className="filter-button" onClick={filterBooks}>
          Filter
        </button>
        <button
          className="clear-button"
          onClick={() => {
            setBooks(initialBooks);
            setTitle('');
            setAuthor('');
            setGenre('');
            setPublicationDate('');
          }}
        >
          Clear Filters
        </button>
      </div>
      <ul className="book-list">
      {books.map((book, index) => (
          <li key={index} className="book-item">
            <div className="book-details">
              <img src={book.coverImage} alt={book.title} className="book-cover" />
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>Publication Date: {book.publicationDate}</p>
              </div>
            </div>
            {editIndex === index ? (
              <div className="action-buttons">
                <button className="edit-button bg-primary" onClick={() => editBook(index)}>Edit</button>
<button className="delete-button  bg-danger" onClick={() => deleteBook(index)}>Delete</button>
              </div>
            ) : (
              <div className="action-buttons ">
                <button className="edit-button bg-primary" onClick={() => editBook(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Library;

