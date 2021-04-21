import React from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';

const DescriptionRating =({ character, value }) => {
  return (
    <Grid item container>
      <Typography id="discrete-slider" gutterBottom>
        {character}
      </Typography>
      <Slider
        defaultValue={value}
        aria-labelledby="discrete-slider"
        step={1}
        marks
        min={0}
        max={5}
        disabled
      />
    </Grid>
  )
}

export default DescriptionRating;