import React, { useState } from 'react';
import axios from 'axios';
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#181E34"
  }
}));

const AddAnswer = ({ toggleAnswerReloadOnFormSubmit, question, name, track }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = (e) => {
    track(e, 'Add Answer');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const url = `/qa/questions/${question.question_id}/answers`;
    const headersAndParams = {
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
      <Typography style={{fontSize: 12, color: "grey"}} onClick={handleClickOpen}>
        &nbsp;&nbsp;
        <u style={{cursor: "pointer"}}>Add Answer</u>
      </Typography>
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
              InputProps={{className: classes.input}}
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
              InputProps={{className: classes.input}}
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
              InputProps={{className: classes.input}}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={handleClose} color="primary">
              <Typography>Submit Answer</Typography>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

export default AddAnswer;