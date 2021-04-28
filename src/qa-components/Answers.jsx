import { useState, useEffect } from 'react';
import { Grid, Button, Box, Typography } from '@material-ui/core';
import _ from 'underscore';
import axios from 'axios';
import API_KEY from '../config.js';
import HelpfulAnswerHandler from './HelpfulAndReport/HelpfulAnswerHandler.jsx';

const Answers = ({ question_id, toggleAnswerReload }) => {
  const [answers, setAnswers] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState([]);
  const [answersCount, setAnswersCount] = useState(2);
  const [answerToggle, setAnswerToggle] = useState(true);

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
  }, [question_id, answersCount, answerToggle]);

  useEffect(() => {
    setAnswerToggle(toggleAnswerReload);
  }, [toggleAnswerReload])

  const handleLoadMoreClick = (event) => {
    setAnswersCount(answersCount + 2);
  };

  const handleCollapseClick = (event) => {
    setAnswersCount(2);
  };

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
      { answers.length > 0 && answers.length !== moreAnswers.length
        ? <Grid>
          <Box pl={1.5}>
            <Button onClick={handleLoadMoreClick} style={{fontSize: 12}}>
              <Typography style={{fontSize: 12}}>load more answers</Typography>
            </Button>
          </Box>
        </Grid>
        : answers.length > 2 &&
        <Grid>
          <Box pl={1.5}>
            <Button onClick={handleCollapseClick} style={{fontSize: 12}}>
              collapse answers
            </Button>
          </Box>
        </Grid>
      }
    </Grid>
  )
}

export default Answers;