import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import _ from 'underscore';
import axios from 'axios';
import API_KEY from '../config.js';
import HelpfulAnswerHandler from './HelpfulAndReport/HelpfulAnswerHandler.jsx';
import { Button } from '@material-ui/core';

const Answers = ({ question_id }) => {
  const [answers, setAnswers] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState([]);
  const [answersCount, setAnswersCount] = useState(2);

  // I use two requests here because I do not know the total amount of answers in the database.
  // The second get requests checks to see if there are any more answers left, if there are not
  // any, then I know not to display the get more answers button on lines 65-71
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
      .catch(err => {
        console.log(err);
      });
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question_id}/answers`, {
      headers: {
        Authorization: API_KEY
      },
      params: {
        question_id: question_id,
        count: answersCount + 2
      }
    })
      .then(answers => {
        setMoreAnswers(answers.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [question_id, answersCount]);

  const handleLoadMoreClick = (event) => {
    setAnswersCount(answersCount + 2);
  }

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
      { (answers.length > 0 && answers.length !== moreAnswers.length) &&
        <Grid>
          <Button onClick={handleLoadMoreClick}>
            load more answers
          </Button>
        </Grid>
      }
    </Grid>
  )
}

export default Answers;