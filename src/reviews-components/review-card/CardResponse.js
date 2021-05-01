import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

const CardResponse = ({ response }) => {

  return (
    <Grid item container direction="column">
      <Paper >
        <Typography variant="body2" component="p" gutterBottom>
          Response from seller:
        </Typography>
        <Typography variant="body2" component="p">
          {response}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default CardResponse;