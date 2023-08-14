import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookCard from './BookCard';



const Home = () => {
  const books = [
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
    {
      id: 4,
      title: 'Java the complete refrence',
      author: 'Schildt Herbert',
      genre:'programming language ',
      publicationDate: '2022-02-15',
      coverImage: 'https://rukminim2.flixcart.com/image/416/416/kjabs7k0-0/book/f/z/f/java-the-complete-reference-original-imafyw4smeydeqbn.jpeg?q=70', // Replace with actual cover image URL
    },
    {
      id: 5,
      title: 'The Crimes of Grindelwald ',
      author: 'Rowling J. K.',
      genre:'fantasy',
      publicationDate: '2022-02-15',
      coverImage: 'https://rukminim2.flixcart.com/image/416/416/l09w8sw0/book/o/k/c/fantastic-beasts-the-crimes-of-grindelwald-the-original-original-imagc36tjz6rhq8v.jpeg?q=70', // Replace with actual cover image URL
    },{
      id: 6,
      title: ' The Secrets of Dumbledore',
      author: 'fantasy',
      publicationDate: '2022-02-15',
      coverImage: 'https://rukminim2.flixcart.com/image/416/416/l1dwknk0/book/g/0/t/untitled-new-fiction-original-imagcye2qnfzhbdb.jpeg?q=70', // Replace with actual cover image URL
    },
  ];
  const [searchResults, setSearchResults] = useState([]);
 
  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  const displayBooks = searchResults.length > 0 ? searchResults : books;

  const [library, setLibrary] = useState([]);
  

  const addToLibrary = (book) => {
    setLibrary([...library, book]);
  };

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {displayBooks.map((book) => (
          <div className="col-md-4" key={book.id}>
            <BookCard book={book} addToLibrary={addToLibrary} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
