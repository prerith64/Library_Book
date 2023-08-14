import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar" style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search the book..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: '5px', width: '50%' }}
      />
    </div>
  );
};

export default SearchBar;
