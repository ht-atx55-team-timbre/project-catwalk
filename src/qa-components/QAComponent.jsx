import React from 'react';
import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => ({
//   qa: {
//     flex: 1
//   },
// }));

const QAComponent = () => {
  // const classes = useStyles();
  return (
    <Grid item>
      <Grid item>
        <p>QUESTION</p>
        <p>ANSWER</p>
        <p>QUESTION</p>
        <p>ANSWER</p>
        <p>HELPFUL | ADD ANSWER</p>
      </Grid>
    </Grid>
  )
}

export default QAComponent;