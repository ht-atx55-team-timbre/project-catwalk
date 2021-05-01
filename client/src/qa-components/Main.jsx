import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Questions from './Questions.jsx';

const QA = ({ product_id, name, track }) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <Box pb={2}>
          <Typography style={{fontSize: 14}}>QUESTIONS & ANSWERS</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Questions product_id={product_id} name={name} track={track} />
      </Grid>
    </Grid>
  );
}

export default QA;