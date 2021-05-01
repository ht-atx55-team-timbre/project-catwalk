import { useState } from 'react';
import axios from 'axios';
import { Grid, Box, Divider, Typography } from '@material-ui/core';
import AddAnswer from '../AddQuestionAndAnswer/AddAnswer.jsx';

const HelpfulQuestionHandler = ({ toggleAnswerReloadOnFormSubmit, product_id, question, name, track }) => {
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [qIsClicked, setQIsClicked] = useState(false);

  const url = `http://127.0.0.1:3004/qa/questions/${question.question_id}/helpful`;
  const headersAndParams = {
    params: { question_id: question.question_id }
  };

  const handleHelpfulQuestion = (e) => {
    track(e, 'Helpful Question');
    if (!qIsClicked) {
      setQIsClicked(true);
      setHelpfulness(helpfulness + 1);
      axios.put(url, {helpfulness: helpfulness}, headersAndParams)
        .catch((err) => {
          console.log(err, 'error sending new helpful question information');
        });
    }
  }

  return (
    <Box pt={2}>
      <Grid container direction="row" alignItems="center">
        <Typography style={{fontSize: 12, color: "grey"}}>Helpful?&nbsp;</Typography>
        <Typography style={{fontSize: 12, color: "grey"}}>
          <u id={question.question_id} onClick={handleHelpfulQuestion} style={{cursor: "pointer"}}>
            Yes
          </u>
          &nbsp;
        </Typography>
        <Typography style={{fontSize: 12, color: "grey"}}>
          ({helpfulness})&nbsp;&nbsp;
        </Typography>
        <Divider orientation="vertical" flexItem/>
        <AddAnswer
          toggleAnswerReloadOnFormSubmit={toggleAnswerReloadOnFormSubmit}
          question={question}
          name={name}
          track={track}
        />
      </Grid>
    </Box>
  )
}

export default HelpfulQuestionHandler;