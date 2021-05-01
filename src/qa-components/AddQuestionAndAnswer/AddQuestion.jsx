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
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#181E34"
  }
}));

const AddQuestion = ({ toggleQuestionReloadOnFormSubmit, product_id, name, track }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = (e) => {
    track(e, 'Add Question');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const url = `http://127.0.0.1:3004/qa/questions`;
    const headersAndParams = {
      params: {
        body: userQuestion,
        name: nickname,
        email: email,
        product_id: product_id
      }
    };

    axios.post(url, {
      body: userQuestion,
      name: nickname,
      email: email,
      product_id: product_id },
      headersAndParams)
      .then(response => {
        toggleQuestionReloadOnFormSubmit();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Grid>
      <Box mt={2}>
        <Button
          variant="outlined"
          style={{borderRadius: 0, borderColor: "red"}}
          onClick={handleClickOpen}
        >
          <Typography style={{fontSize: 14}}>Add A Question +</Typography>
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleFormSubmit}>
          <DialogTitle id="form-dialog-title">
            Ask Your Question
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              About the {name}
            </DialogContentText>
            <TextField
              required
              inputProps={{maxLength: 60}}
              autoFocus
              margin="dense"
              id="user-question"
              label="Your Question:"
              type="text"
              fullWidth
              placeholder="Ask your question here"
              multiline
              rows={5}
              maxrows={10}
              variant="outlined"
              value={userQuestion}
              onInput={ e=>setUserQuestion(e.target.value)}
              InputProps={{className: classes.input}}
            />
            <TextField
              required
              inputProps={{maxLength: 60}}
              margin="dense"
              id="name"
              label="Nickname:"
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
              label="Email Address:"
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
            <Button type="submit" onClick={handleClose}>
              <Typography>Submit Question</Typography>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

export default AddQuestion;