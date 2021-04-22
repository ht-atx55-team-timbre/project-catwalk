import { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import AddAnswer from '../AddQuestionAndAnswer/AddAnswer.jsx';

const HelpfulQuestionHandler = ({ question, name }) => {
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [isClicked, setIsClicked] = useState(false);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/helpful`;
  const headersAndParams = {
    headers: { Authorization: API_KEY },
    params: { question_id: question.question_id }
  };

  const handleHelpfulQuestion = (event) => {
    if (!isClicked) {
      axios.put(url, {helpfulness: helpfulness}, headersAndParams)
        .then((response) => {
          setIsClicked(true);
          setHelpfulness(helpfulness + 1);
        })
        .catch((err) => {
          console.log(err, 'error sending new helpful question information');
        });
    }
  }

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <Typography>
          Helpful?
        </Typography>
      </Grid>
      <Grid item>
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button>
            <Grid container direction="row">
              <u id={question.question_id} onClick={handleHelpfulQuestion}>Yes</u>
              <Typography>({helpfulness})</Typography>
            </Grid>
          </Button>
          <AddAnswer question={question} name={name} />
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default HelpfulQuestionHandler;