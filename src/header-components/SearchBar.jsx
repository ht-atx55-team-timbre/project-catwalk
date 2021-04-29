import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';

const SearchBar = ({
  searchClass,
  searchIconClass,
  inputRootClass,
  inputInputClass,
  onSearchFormSubmit
}) => {
  const [searchInput, setSearchInput] = useState(null);

  return (
    <form
      className={searchClass}
      onSubmit={onSearchFormSubmit}
      id={searchInput}
    >
      <div className={searchIconClass}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: inputRootClass,
          input: inputInputClass,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={e => setSearchInput(e.target.value)}
      />
    </form>
  )
}

export default SearchBar;