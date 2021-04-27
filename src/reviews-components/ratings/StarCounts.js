import React from 'react';
import { Grid } from '@material-ui/core';
import StarCount from './StarCount';

const StarCounts = ({ stars, numberOfRating, ratings }) => {
  if (Object.keys(ratings).length === 0) {
    stars.forEach(star => {
      ratings[star] = 0;
    })
  }

  return (
    <Grid item container>
      {stars.map((star) =>
        <StarCount
          key={star}
          star={star}
          numberOfRating={numberOfRating}
          count={ratings[star] ? ratings[star] : 0}
        />
      )}
    </Grid>
  )
}

export default StarCounts;