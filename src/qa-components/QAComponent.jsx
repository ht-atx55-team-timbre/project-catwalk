import React from 'react';
import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => ({
//   qa: {
//     flex: 1
//   }
// }));

const QAComponent = () => {
  // const classes = useStyles();
  return (
    <Grid item>
      <Grid container item direction="row" justify="space-between">
        <Grid item direction="column">
          <p>QUESTION</p>
          <p>ANSWER</p>
        </Grid>
        <Grid>
          <p>HELPFUL | ADD ANSWER</p>
        </Grid>
      </Grid>
      <Grid container item direction="row" justify="space-between">
        <Grid item direction="column">
          <p>QUESTION</p>
          <p>ANSWER</p>
        </Grid>
        <Grid>
          <p>HELPFUL | ADD ANSWER</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default QAComponent;