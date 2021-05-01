import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#181E34"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#181E34"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#181E34"
    }
  }
});

const SearchBar = ({
  onSearchFormSubmit,
  allProducts
}) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState(null);

  return (
    <form
      onSubmit={onSearchFormSubmit}
      id={searchInput}
    >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={allProducts.map((option) => `${option.name}: ${option.category}`)}
        onChange={(e, value) => setSearchInput(value)}
        renderInput={(params) => (
          <TextField
            className={classes.root}
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
