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
  DialogTitle
} from '@material-ui/core';

const AddQuestion = ({ toggleReloadOnFormSubmit, product_id, name }) => {
  const [open, setOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
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

    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions`;
    const headersAndParams = {
      headers: { Authorization: API_KEY },
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
        toggleReloadOnFormSubmit();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Grid>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add A Question +
      </Button>
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
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={handleClose} color="primary">
              Submit Question
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

export default AddQuestion;