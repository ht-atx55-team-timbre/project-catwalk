import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import _ from 'underscore';
import API_KEY from '../config.js';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulAndReport/HelpfulQuestionHandler';
import AddQuestion from './AddQuestionAndAnswer/AddQuestion.jsx';

const Questions = ({ product_id }) => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(4);


  // I use two requests here because I do not know the total amount of questions in the database.
  // The second get requests checks to see if there are any more questions left, if there are not
  // any, then I know not to display the get more questions button on lines 76-78
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
        .catch(err => {
          console.log(err);
        });
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          product_id: product_id,
          count: questionCount + 2
        }
      })
        .then(questions => {
          setMoreQuestions(questions.data.results);
        })
        .catch(err => {
          console.log(err);
        });
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
        { questions.length !== moreQuestions.length &&
          <Button variant="outlined" onClick={handleSubmitClick}>MORE ANSWERED QUESTIONS</Button>
        }
        <AddQuestion />
      </Grid>
    </Grid>
  )
}

export default Questions;