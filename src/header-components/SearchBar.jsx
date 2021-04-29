import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';

const SearchBar = ({
  searchClass,
  searchIconClass,
  inputRootClass,
  inputInputClass
}) => {
  return (
    <div className={searchClass}>
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
      />
    </div>
  )
}

export default SearchBar;