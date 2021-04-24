import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const CardInfo = ({ body, summary }) => {


  return (
    <Grid container direction="column" justify="flex-start" spacing={2}>
      <Grid item>
        <Typography variant="h5" component="h2">
          {summary}
        </Typography>
      </Grid>
      <Grid item >
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </Grid>
    </Grid>
)
}

export default CardInfo;
