import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = ({
  searchClass,
  onSearchFormSubmit,
  allProducts
}) => {
  const [searchInput, setSearchInput] = useState(null);

  return (
    <form
      onSubmit={onSearchFormSubmit}
      id={searchInput}
    >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={allProducts.map((option) => option.name)}
        onChange={(e, value) => setSearchInput(value)}
        renderInput={(params) => (
          <TextField
            className={searchClass}
            {...params}
            style={{borderColor: "primary"}}
            placeholder="Search..."
            variant="outlined"
            onChange={e => setSearchInput(e.target.value)}
          />
        )}
      />
    </form>
  )
}

export default SearchBar;
