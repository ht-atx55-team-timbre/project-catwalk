import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const FormBody = ({ setBody }) => {

  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        label="Review body"
        multiline
        fullWidth
        rows={4}
        placeholder="Why did you like the product or not?"
        onChange={e => {setBody(e.target.value)}}
      />
    </Grid>
  )
}

export default FormBody;