import React from 'react';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="search-container">
      <InputBase
        className="search-input"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton className="search-button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBox;
