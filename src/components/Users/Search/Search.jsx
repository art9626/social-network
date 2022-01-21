import React from 'react';

const Search = ({ onChangeSearch, onClearSearch, searchValue }) => {
  return (
    <div>
      <input onChange={onChangeSearch} value={searchValue} type="text" />
      <button onClick={onClearSearch}>Clear</button>
    </div>
  )
}

export default Search;