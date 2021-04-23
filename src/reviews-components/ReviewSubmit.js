import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Rating from '@material-ui/lab/Rating';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';

import API_KEY from '../config.js';

const ReviewSubmit = ({ handleCountChange, name }) => {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('female');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ButtonGroup color="primary">
      <Button onClick={handleCountChange}>More Reviews</Button>
      <Button color="primary" onClick={handleClickOpen}>Add Reviews +</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Write Your Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            About the {name}
          </DialogContentText>
          <Rating />
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </ButtonGroup>
  )
}

export default ReviewSubmit;