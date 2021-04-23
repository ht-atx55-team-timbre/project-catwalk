import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import Ratings from './Ratings';
import Reviews from './Reviews';

<<<<<<< HEAD
const ReviewsAndRatings = ({ product_id, name }) => {

=======
const ReviewsAndRatings = ({ product_id }) => {
  product_id = 24157;
>>>>>>> d3be90ed8dd13aa5f4b35bd4c50dfcbd48c3e90c
  return (
    <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          RATINGS & REVIEWS
        </Typography>
      </Grid>
      <Ratings
        product_id={product_id}
      />
      <Reviews
        product_id={product_id}
        name={name}
      />
    </Grid>
  )
}

export default ReviewsAndRatings;