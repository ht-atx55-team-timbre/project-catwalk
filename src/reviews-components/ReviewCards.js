import React from 'react';
import { Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ReviewCard from './review-card/ReviewCard';

const useStyles = makeStyles((theme) => ({
  grid: {
    maxHeight: '88vh',
    overflow: 'auto',
  },
}));

const ReviewCards = ({ results, track }) => {

  const classes = useStyles();

  return (
    <Grid item container className={classes.grid}>
      {results.map(review => {
        return (
          <ReviewCard
            review={review}
            key={review.review_id}
            track={track}
          />
        )
      })}
    </Grid>
  )
}

export default ReviewCards;