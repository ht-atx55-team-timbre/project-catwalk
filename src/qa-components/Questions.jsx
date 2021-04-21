import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import API_KEY from '../config.js';
import _ from 'underscore';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulQuestionHandler'

const Questions = ({ product_id }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
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
  }, [product_id]);

  return (
    <Grid>
      {_.map(questions, question =>
        <Grid container key={question.question_id}>
          <Grid item xs={12} sm={9}>
            <p>{`Q: ${question.question_body}`}</p>
            <Answers question_id={question.question_id} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <HelpfulQuestionHandler question={question} />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Questions;