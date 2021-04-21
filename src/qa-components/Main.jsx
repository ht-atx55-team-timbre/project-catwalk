import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import Questions from './Questions.jsx';

const QA = ({ product_id }) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <p>QUESTIONS & ANSWERS</p>
      </Grid>
      <SearchBar
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      <Grid item>
        <Questions product_id={product_id} />
      </Grid>
    </Grid>
  );
}

export default QA;