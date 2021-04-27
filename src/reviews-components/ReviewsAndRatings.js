import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { useState } from 'react';

import Ratings from './Ratings';
import Reviews from './Reviews';

const ReviewsAndRatings = ({ product_id, name }) => {
  const [addReview, setAddReview] = useState(false)
  return (
    <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          RATINGS & REVIEWS
        </Typography>
      </Grid>
      <Ratings
        product_id={product_id}
        addReview={addReview}
      />
      <Reviews
        product_id={product_id}
        name={name}
        addReview={addReview}
        setAddReview={setAddReview}
      />
    </Grid>
  )
}

export default ReviewsAndRatings;