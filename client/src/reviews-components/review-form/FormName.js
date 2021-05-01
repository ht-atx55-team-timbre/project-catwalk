import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const FormName = ({ setUserName }) => {

  return (
    <Grid item container xs={5}>
    <TextField
      variant="outlined"
      margin="dense"
      label="User Name"
      type="text"
      fullWidth
      name="userName"
      onChange={e => {setUserName(e.target.value)}}
    />
    <Typography>For privacy reasons, do not use your full name or email addres</Typography>
  </Grid>
  )
}

export default FormName;