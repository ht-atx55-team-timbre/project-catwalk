import { useState } from 'react';
import { Grid, Divider, Typography, Box } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import ReportAnswer from './ReportAnswer.jsx';

const HelpfulAnswerHandler = ({ answer, track }) => {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [aIsClicked, setAIsClicked] = useState(false);

  const url = `/qa/answers/${answer.answer_id}/helpful`;
  const headersAndParams = {
    params: { answer_id: answer.answer_id }
  };

  const handleHelpfulAnswer = (e) => {
    track(e, 'Helpful Answer');
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
        <ReportAnswer answer_id={answer.answer_id} track={track} />
      </Grid>
    </Grid>
  )
}

export default HelpfulAnswerHandler;