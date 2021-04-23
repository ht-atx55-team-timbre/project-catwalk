import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CardRecommend = () => {

  return (
    <Grid item container spacing={1}>
      <Grid item>
        <CheckCircleIcon style={{ fontSize: 20}} />
      </Grid>
      <Grid item>
        <Typography variant="body2" component="p">
          I recommend this product
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardRecommend;