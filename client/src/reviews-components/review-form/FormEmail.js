import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const FormEmail = ({ setEmail }) => {

  return (
    <Grid item container xs={7}>
      <TextField
        variant="outlined"
        margin="dense"
        label="Email Address"
        type="email"
        fullWidth
        name="email"
        onChange={e => {setEmail(e.target.value)}}
      />
      <Typography>For authentication reasons, you will not be emailed</Typography>
    </Grid>
  )
}

export default FormEmail;