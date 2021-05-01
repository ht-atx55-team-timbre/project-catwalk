import { useState } from 'react';
import { Grid, Divider, Typography, Box } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import ReportAnswer from './ReportAnswer.jsx';

const HelpfulAnswerHandler = ({ answer }) => {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [aIsClicked, setAIsClicked] = useState(false);

  const url = `http://127.0.0.1:3004/qa/answers/${answer.answer_id}/helpful`;
  const headersAndParams = {
    params: { answer_id: answer.answer_id }
  };

  const handleHelpfulAnswer = (event) => {
    if (!aIsClicked) {
      setAIsClicked(!aIsClicked);
      setHelpfulness(helpfulness + 1);
      axios.put(url, { helpfulness: helpfulness }, headersAndParams)
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Grid>
      <Grid container alignItems="center">
        <Typography><b>A:&nbsp;</b></Typography>
        <Typography>{`${answer.body}`}</Typography>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <Box pl={2.5} pt={0.5} pb={0.5}>
          <Typography style={{fontSize: 12, color: "grey"}}>
            {`by ${answer.answerer_name}, ${moment(answer.date).format('MMMM Do, YYYY')}`}
            &nbsp;&nbsp;
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Typography style={{fontSize: 12, color: "grey"}}>
          &nbsp;&nbsp;
          Helpful?&nbsp;
          <u id={answer.answer_id} onClick={handleHelpfulAnswer} style={{cursor: "pointer"}}>
            Yes
          </u>
          &nbsp;
        </Typography>
        <Typography style={{fontSize: 12, color: "grey"}}>
          ({helpfulness})
          &nbsp;&nbsp;
        </Typography>
        <Divider orientation="vertical" flexItem />
        <ReportAnswer answer_id={answer.answer_id} />
      </Grid>
    </Grid>
  )
}

export default HelpfulAnswerHandler;