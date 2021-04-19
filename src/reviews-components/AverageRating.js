import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import StarComponent from './StarComponent';

const AverageRating = (props) => {
  return (
    <Grid
      item
      container
      spacing={2}
      alignItems="center"
      justify="center"
    >
      <Grid
        item
        md={12}
        lg={4}
      >
        <Typography
          variant="h3"
        >
          4.5
        </Typography>
      </Grid>
      <Grid
        item
        md={12}
        lg={8}
      >
        <StarComponent />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Typography
          variant="subtitle2"
          gutterBottom
        >
          100% of reviews recommend this Product
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AverageRating;