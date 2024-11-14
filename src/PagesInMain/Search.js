import React from 'react';

function SearchBar({ search, setLookSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={search}
                onChange={(e) => setLookSearch(e.target.value)}
                placeholder="Search contacts..."
            />
        </div>
    );
}

export default SearchBar;


