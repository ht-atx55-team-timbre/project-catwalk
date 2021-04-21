import { useState } from 'react';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import API_KEY from '../config.js';
import ReportAnswer from './ReportAnswer.jsx';

const HelpfulAnswerHandler = ({ answer }) => {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [isClicked, setisClicked] = useState(false);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answer.answer_id}/helpful`;
  const headersAndParams = {
    headers: { Authorization: API_KEY },
    params: { answer_id: answer.answer_id }
  };

  const handleHelpfulAnswer = (event) => {
    if (!isClicked) {
      axios.put(url, { helpfulness: helpfulness }, headersAndParams)
        .then((response) => {
          setisClicked(true);
          setHelpfulness(helpfulness + 1);
        })
        .catch((err) => {
          console.log(err, 'error sending new helpful question information');
        });
    }
  }

  return (
    <Grid>
      <p>{`A: ${answer.body}`}</p>
      <p>
        {`by ${answer.answerer_name}, ${moment(answer.date).format('MMMM Do, YYYY')} | Helpful? `}
        <span>
          <u id={answer.answer_id} onClick={handleHelpfulAnswer}>Yes</u>
        </span>
        {` (${helpfulness}) | `}
        <span>
          <ReportAnswer answer_id={answer.answer_id}/>
        </span>
      </p>
    </Grid>
  )
}

export default HelpfulAnswerHandler;