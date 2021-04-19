import React from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';

const DescriptionRating =(props) => {
  return (
    <Grid
      item
      container
    >
      <Typography
        id="discrete-slider"
        gutterBottom
      >
        Size
      </Typography>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        step={25}
        marks
        min={0}
        max={100}
        disabled
      />
    </Grid>
  )
}

export default DescriptionRating;