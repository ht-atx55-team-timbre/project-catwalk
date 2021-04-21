import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import Questions from './Questions.jsx';
import LoadMoreButton from './LoadMoreQs.jsx';
import AddQuestion from './AddQuestion.jsx';
import API_KEY from '../config.js';
import axios from 'axios';

const QA = ({ product_id }) => {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(2);

  useEffect(() => {
    if (product_id) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          product_id: product_id,
          count: 2
        }
      })
        .then(questions => {
          setQuestions(questions.data.results);
        })
    }
  }, [product_id]);

  return (
    <Grid container direction="column">
      <Grid item>
        <p>QUESTIONS & ANSWERS</p>
      </Grid>
      <SearchBar
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      <Grid item>
        <Questions questions={questions}/>
      </Grid>
      <Grid item>
        <LoadMoreButton />
        <AddQuestion />
      </Grid>
    </Grid>
  );
}

export default QA;