import React from 'react';

const SearchInput = ({ searchText, onSearchChange }) => {
    return (
        <input
            id="search"
            className="search"
            placeholder="Search"
            value={searchText}
            onChange={onSearchChange}
        />
    );
};

export default SearchInput;
