import React from 'react';
import { useState, useEffect } from 'react';
import {Grid, Typography} from '@material-ui/core';
import axios from 'axios';

import Ratings from './Ratings';
import Reviews from './Reviews';
import API_KEY from '../config.js';

const ReviewsAndRatings = ({ product_id }) => {
  const [reviewMetadata, setReviewMetadata] = useState({})

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        product_id: product_id,
      }
    })
      .then(res => {
        setReviewMetadata(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
  }, [product_id])
  return (
  <Grid
    container
    spacing={3}
  >
    <Grid
      item
      xs={12}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        RATINGS & REVIEWS
      </Typography>
    </Grid>

    <Ratings reviewMetadata={reviewMetadata}/>

    <Reviews />
  </Grid>
  )
}

export default ReviewsAndRatings;