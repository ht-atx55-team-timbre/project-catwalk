import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const FormSummary = ({ setSummary }) => {

  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        label="Review summary"
        fullWidth
        placeholder="Example: Best purchase ever!"
        onChange={e => {setSummary(e.target.value)}}
      />
    </Grid>
  )
}

export default FormSummary;