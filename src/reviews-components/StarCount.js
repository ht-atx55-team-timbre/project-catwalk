import React from 'react';
import {Grid, Typography, LinearProgress} from '@material-ui/core';


const StarCount = ({ star, numberOfRating, count}) => {
  return (
    <Grid item container alignItems="baseline">
      <Grid item lg={3} md={12} sm={12} xs={3}>
        <Typography variant="subtitle2">
          {`${star} stars`}
        </Typography>
      </Grid>
      <Grid item container lg={9} md={12} sm={12} xs={9}>
        <LinearProgress
          variant="determinate"
          value={100 / numberOfRating * count}
          style={{ width: '100%', height:'8px'}}
        />
      </Grid>
    </Grid>
  )
}

export default StarCount;