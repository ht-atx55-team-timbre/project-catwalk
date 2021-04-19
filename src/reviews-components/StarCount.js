import React from 'react';
import {Grid, Typography, LinearProgress} from '@material-ui/core';


const StarCount = (props) => {
  return (
    <Grid
      item
      container
      alignItems="baseline"
    >
      <Grid
        item
        md={3}
        sm={12}
        xs={3}
      >
        <Typography
          variant="subtitle2"
        >
          5 stars
        </Typography>
      </Grid>
      <Grid
        item
        container
        md={9}
        sm={12}
        xs={9}
      >
        <LinearProgress
          variant="determinate"
          value={46}
          style={{ width: '100%', height:'8px'}}
        />
      </Grid>
    </Grid>
  )
}

export default StarCount;