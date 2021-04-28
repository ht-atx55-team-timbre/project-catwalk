import { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js';
import { Grid, Box, Divider, Typography } from '@material-ui/core';
import AddAnswer from '../AddQuestionAndAnswer/AddAnswer.jsx';

const HelpfulQuestionHandler = ({ toggleAnswerReloadOnFormSubmit, product_id, question, name }) => {
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [qIsClicked, setQIsClicked] = useState(false);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/helpful`;
  const headersAndParams = {
    headers: { Authorization: API_KEY },
    params: { question_id: question.question_id }
  };

  const handleHelpfulQuestion = (event) => {
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
          <u id={question.question_id} onClick={handleHelpfulQuestion}>Yes</u>&nbsp;
        </Typography>
        <Typography style={{fontSize: 12, color: "grey"}}>
          ({helpfulness})&nbsp;&nbsp;
        </Typography>
        <Divider orientation="vertical" flexItem/>
        <AddAnswer
          toggleAnswerReloadOnFormSubmit={toggleAnswerReloadOnFormSubmit}
          question={question}
          name={name}
        />
      </Grid>
    </Box>
  )
}

export default HelpfulQuestionHandler;