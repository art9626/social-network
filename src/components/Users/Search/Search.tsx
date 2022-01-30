import React, { ChangeEvent } from 'react';

type SearchPropsType = {
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => Promise<void>;
  searchValue: string;
}

const Search: React.FC<SearchPropsType> = ({ onChangeSearch, onClearSearch, searchValue }) => {
  return (
    <div>
      <input onChange={onChangeSearch} value={searchValue} type="text" />
      <button onClick={onClearSearch}>Clear</button>
    </div>
  )
}

export default Search;