import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js';
import {
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@material-ui/core';

const AddAnswer = ({ toggleAnswerReloadOnFormSubmit, question, name }) => {
  const [open, setOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/answers`;
    const headersAndParams = {
      headers: { Authorization: API_KEY },
      params: {
        question_id: question.question_id,
        body: userAnswer,
        name: nickname,
        email: email,
        photos: null
      }
    };

    axios.post(url, {
      question_id: question.question_id ,
      body: userAnswer,
      name: nickname,
      email: email },
      headersAndParams)
      .then(response => {
        toggleAnswerReloadOnFormSubmit();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Grid>
      <Button style={{textTransform: "none"}} onClick={handleClickOpen}>
        <Typography style={{fontSize: 12, color: "grey"}}><u>Add Answer</u></Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleFormSubmit}>
          <DialogTitle id="form-dialog-title">
            Submit Your Answer
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {name}: {question.question_body}
            </DialogContentText>
            <TextField
              required
              inputProps={{maxLength: 1000}}
              autoFocus
              margin="dense"
              id="answer"
              label="Your Answer:"
              type="text"
              fullWidth
              placeholder="Ask your question here"
              multiline
              rows={5}
              maxrows={10}
              variant="outlined"
              value={userAnswer}
              onInput={ e=>setUserAnswer(e.target.value)}
            />
            <TextField
              required
              inputProps={{maxLength: 60}}
              margin="dense"
              id="name"
              label="What is your nickname:"
              type="text"
              fullWidth
              placeholder="Example: jackson11!"
              variant="outlined"
              value={nickname}
              onInput={ e=>setNickname(e.target.value)}
            />
            <TextField
              required
              inputProps={{maxLength: 60}}
              margin="dense"
              id="email"
              label="Your email:"
              type="text"
              fullWidth
              placeholder="Would you like the product or not?"
              variant="outlined"
              value={email}
              onInput={ e=>setEmail(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={handleClose} color="primary">
              Submit Answer
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

export default AddAnswer;