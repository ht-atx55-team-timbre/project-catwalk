import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import _ from 'underscore';
import axios from 'axios';
import HelpfulAnswerHandler from './HelpfulAndReport/HelpfulAnswerHandler.jsx';
import MoreAnswersButton from './MoreAnswersButton.jsx';

const Answers = ({ question_id, toggleAnswerReload, track }) => {
  const [answers, setAnswers] = useState([]);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [answersCount, setAnswersCount] = useState(2);
  const [answerToggle, setAnswerToggle] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3004/qa/questions/${question_id}/answers`, {
      params: {
        question_id: question_id,
        count: 1000
      }
    })
      .then(answers => {
        setAnswers(answers.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [question_id, answerToggle]);

  useEffect(() => {
    setAnswerToggle(toggleAnswerReload);
  }, [toggleAnswerReload])

  useEffect(() => {
    setDisplayedAnswers(answers.slice(0, answersCount));
  }, [answers, answersCount])

  const handleLoadMoreClick = (e) => {
    track(e, 'Load More Answers');
    setAnswersCount(answersCount + 2);
  };

  const handleCollapseClick = (e) => {
    track(e, 'Collapse Answers');
    setAnswersCount(2);
  };

  return (
    <Grid>
      <Grid>
        {_.map(displayedAnswers, answer =>
          <Grid key={answer.answer_id}>
            <Grid>
              <HelpfulAnswerHandler answer={answer} track={track} />
            </Grid>
          </Grid>
        )}
      </Grid>
      { answers.length > 0 && answers.length !== displayedAnswers.length
        ? <Grid>
          <MoreAnswersButton text="Load more answers" handleClick={handleLoadMoreClick} />
        </Grid>
        : answers.length > 2 &&
        <Grid>
          <MoreAnswersButton text="Collapse answers" handleClick={handleCollapseClick} />
        </Grid>
      }
    </Grid>
  )
}

export default Answers;