import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import _ from 'underscore';
import axios from 'axios';
import API_KEY from '../config.js';
import HelpfulAnswerHandler from './HelpfulAnswerHandler.jsx';

const Answers = ({ question_id }) => {
  const [answers, setAnswers] = useState([]);


  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question_id}/answers`, {
      headers: {
        Authorization: API_KEY
      },
      params: {
        question_id: question_id,
        count: 2
      }
    })
      .then(answers => {
        setAnswers(answers.data.results);
      })
  }, [question_id]);

  return (
    <Grid>
      {_.map(answers, answer =>
        <Grid key={answer.answer_id}>
          <HelpfulAnswerHandler answer={answer}/>
        </Grid>
      )}
    </Grid>
  )
}

export default Answers;