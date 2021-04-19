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
    <Grid container>
      <Grid item xs={6}>
        <p>Q:</p>
        <p>A:</p>
      </Grid>
      <Grid item xs={6}>
        <p>HELPFUL | ADD ANSWER</p>
      </Grid>
    </Grid>
  )
}

export default QAComponent;