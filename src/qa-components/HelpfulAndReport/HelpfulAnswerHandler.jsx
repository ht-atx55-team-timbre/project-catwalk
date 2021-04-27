import { useState } from 'react';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import API_KEY from '../../config.js';
import ReportAnswer from './ReportAnswer.jsx';

const HelpfulAnswerHandler = ({ answer }) => {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [aIsClicked, setAIsClicked] = useState(false);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answer.answer_id}/helpful`;
  const headersAndParams = {
    headers: { Authorization: API_KEY },
    params: { answer_id: answer.answer_id }
  };

  const handleHelpfulAnswer = (event) => {
    if (!aIsClicked) {
      axios.put(url, { helpfulness: helpfulness }, headersAndParams)
        .then((response) => {
          setAIsClicked(!aIsClicked);
          setHelpfulness(helpfulness + 1);
        })
        .catch((err) => {
          console.log(err, 'error sending new helpful question information');
        });
    }
  }

  return (
    <Grid>
      <Grid container="row" alignItems="center">
        <Typography><b>A:&nbsp;</b></Typography>
        <Typography style={{fontSize: 12}}>{`${answer.body}`}</Typography>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button style={{textTransform: "none", fontSize: 12, color: "grey"}} disabled >
            by {answer.answerer_name}, {moment(answer.date).format('MMMM Do, YYYY')}
          </Button>
          <Button style={{textTransform: "none"}}>
            <Typography style={{fontSize: 12, color: "grey"}}>
              Helpful?&nbsp;<u id={answer.answer_id} onClick={handleHelpfulAnswer}>Yes</u>&nbsp;
            </Typography>
            <Typography style={{fontSize: 12, color: "grey"}}>({helpfulness})</Typography>
          </Button>
          <ReportAnswer answer_id={answer.answer_id} />
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default HelpfulAnswerHandler;