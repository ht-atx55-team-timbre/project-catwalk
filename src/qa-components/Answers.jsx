import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import _ from 'underscore';
import axios from 'axios';
import API_KEY from '../config.js';
import HelpfulAnswerHandler from './HelpfulAnswerHandler.jsx';

const Answers = ({ question_id }) => {
  const [answers, setAnswers] = useState([]);
  const [answersCount, setAnswersCount] = useState(2);

  const handleLoadMoreClick = (event) => {
    setAnswersCount(answersCount + 2);
  }

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question_id}/answers`, {
      headers: {
        Authorization: API_KEY
      },
      params: {
        question_id: question_id,
        count: answersCount
      }
    })
      .then(answers => {
        setAnswers(answers.data.results);
      })
  }, [question_id, answersCount]);

  return (
    <Grid>
      <Grid>
        {_.map(answers, answer =>
          <Grid key={answer.answer_id}>
            <Grid>
              <HelpfulAnswerHandler answer={answer}/>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid>
        <b onClick={handleLoadMoreClick}>load more answers</b>
      </Grid>
    </Grid>
  )
}

export default Answers;