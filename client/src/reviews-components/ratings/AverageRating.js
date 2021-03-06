import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import StarComponent from '../StarComponent';

const percentRecommend = (recommended) => {
  if (Object.keys(recommended).length === 0) return 0;

  let recommend = Number(recommended.true);
  let notRecommend = Number(recommended.false);

  return Math.round(recommend / (recommend + notRecommend) * 100);
}

const AverageRating = ({ averageRating, recommended }) => {

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item md={12} lg={4} >
        <Typography variant="h3" >
          {String(averageRating)}
        </Typography>
      </Grid>
      <Grid item md={12} lg={8}>
        <StarComponent rating={averageRating}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          {`${percentRecommend(recommended)}% of reviews recommend this Product`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AverageRating;