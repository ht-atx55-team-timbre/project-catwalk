// import React from 'react';
// import { Box } from '@material-ui/core';
// import SearchBar from "material-ui-search-bar";

// const SearchBarComponent = ({ sortQuestionsBySearchTerm }) => {
//   return (
//     <Box>
//       <SearchBar
//         placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
//         onChange={sortQuestionsBySearchTerm}
//         style={{
//           borderRadius: 0,
//           border: "solid",
//           borderWidth: 1,
//         }}
//       />
//     </Box>
//   )
// };

// export default SearchBarComponent;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    border: "solid",
    borderWidth: 1,
    borderRadius: 0
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon: {
    padding: 10,
  },
}));

const SearchBarComponent = ({ sortQuestionsBySearchTerm }) => {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.root}
      elevation={0}
    >
      <InputBase
        className={classes.input}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={e => sortQuestionsBySearchTerm(e.target.value)}
      />
      <SearchIcon
        className={classes.icon}
      />
    </Paper>
  );
};

export default SearchBarComponent;