import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    border: "solid",
    borderWidth: 1,
    borderRadius: 0,
    borderColor: "red"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#181E34"
  },
  icon: {
    padding: 10,
    color: "red"
  },
}));

const SearchBarComponent = ({ sortQuestionsBySearchTerm, track }) => {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.root}
      elevation={0}
    >
      <InputBase
        className={classes.input}
        placeholder="Have a question? Search for answers..."
        onChange={e => sortQuestionsBySearchTerm(e.target.value)}
        style={{fontSize: 14}}
      />
      <SearchIcon
        className={classes.icon}
      />
    </Paper>
  );
};

export default SearchBarComponent;