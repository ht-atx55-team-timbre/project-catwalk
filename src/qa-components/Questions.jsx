import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import _ from 'underscore';
import API_KEY from '../config.js';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulQuestionHandler';
import AddQuestion from './AddQuestion.jsx';

const Questions = ({ product_id }) => {
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
          count: questionCount
        }
      })
        .then(questions => {
          setQuestions(questions.data.results);
        })
    }
  }, [product_id, questionCount]);

  const handleSubmitClick = (event) => {
    setQuestionCount(questionCount + 2);
  }

  return (
    <Grid>
      <Grid>
        {_.map(questions, question =>
          <Grid key={question.question_id}>
            <Grid container>
              <Grid item xs={12} sm={9}>
                <Typography>{`Q: ${question.question_body}`}</Typography>
                <Answers question_id={question.question_id} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <HelpfulQuestionHandler question={question} />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid container direction="row">
        <Button variant="outlined" onClick={handleSubmitClick}>MORE ANSWERED QUESTIONS</Button>
        <AddQuestion />
      </Grid>
    </Grid>
  )
}

export default Questions;