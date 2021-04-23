import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import Questions from './Questions.jsx';

const QA = ({ product_id, name }) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>QUESTIONS & ANSWERS</Typography>
      </Grid>
      <SearchBar
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      <Grid item>
        <Questions product_id={product_id} name={name} />
      </Grid>
    </Grid>
  );
}

export default QA;