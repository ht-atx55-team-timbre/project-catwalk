import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Questions from './Questions.jsx';

const QA = ({ product_id, name }) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <Box pb={2}>
          <Typography>QUESTIONS & ANSWERS</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Questions product_id={product_id} name={name} />
      </Grid>
    </Grid>
  );
}

export default QA;