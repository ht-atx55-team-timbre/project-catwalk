import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import Ratings from './Ratings';
import Reviews from './Reviews';

const ReviewsAndRatings = ({ product_id }) => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          RATINGS & REVIEWS
        </Typography>
      </Grid>
      <Ratings
        product_id={product_id}
      />
      <Reviews />
    </Grid>
  )
}

export default ReviewsAndRatings;