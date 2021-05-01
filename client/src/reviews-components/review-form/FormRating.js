import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const FormRating = ({ rating, setRating }) => {
  const ratingDispaly = ['Rating', 'Poor', 'Fair', 'Average', 'Good', 'Great']

  return (
    <Grid item container xs={4}>
      <Grid item xs={12}>
        <Typography>{ratingDispaly[rating]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Rating value={rating} onChange={e => {setRating(Number(e.target.value))}} name="rating"/>
      </Grid>
    </Grid>
  )
}

export default FormRating;