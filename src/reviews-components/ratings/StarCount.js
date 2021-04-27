import React from 'react';
import {Grid, Typography, LinearProgress} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    width: '100%',
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#46A46C',
  },
}))(LinearProgress);

const StarCount = ({ star, numberOfRating, count}) => {

  return (
    <Grid item container alignItems="baseline">
      <Grid item lg={3} md={12} sm={12} xs={3}>
        <Typography variant="subtitle2">
          {`${star} stars`}
        </Typography>
      </Grid>
      <Grid item container lg={9} md={12} sm={12} xs={9}>
        <BorderLinearProgress variant="determinate" value={100 / numberOfRating * count} />
      </Grid>
    </Grid>
  )
}

export default StarCount;