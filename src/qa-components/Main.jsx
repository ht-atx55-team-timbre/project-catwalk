import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import Questions from './Questions.jsx';
import LoadMoreButton from './LoadMoreQs.jsx';
import AddQuestion from './AddQuestion.jsx';
// import axios from 'axios';
// import API_KEY from '../config.js';
// import {
//   getAllQuestions,
//   getAllAnswers
// } from './RequestFunctions.js';

const QA = (props) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <p>QUESTIONS & ANSWERS</p>
      </Grid>
      <SearchBar
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      <Grid item>
        <Questions product_id={props.product_id}/>
      </Grid>
      <Grid item>
        <LoadMoreButton />
        <AddQuestion />
      </Grid>
    </Grid>
  );
}

export default QA;