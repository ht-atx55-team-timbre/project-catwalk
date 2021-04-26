import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';

import StarComponent from '../StarComponent';

const CardHeader = ({ rating, reviewer_name, date }) => {

  return (
    <Grid container justify="space-between">
      <Grid item>
        <StarComponent rating={rating}/>
      </Grid>
      <Grid item>
        <Typography color="textSecondary">
          {`${reviewer_name}, ${moment(date).format('MMMM Do, YYYY')}`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardHeader;