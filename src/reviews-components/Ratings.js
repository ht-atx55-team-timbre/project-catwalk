import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AverageRating from './AverageRating';
import StarCount from './StarCount';
import DescriptionRating from './DescriptionRating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Ratings = (props) => {

  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={4}
    >
      <Paper
        className={classes.paper}
      >
        <Grid
          item
          container
          spacing={2}
        >
          <AverageRating />
          <Grid
            item
            container
          >
            <StarCount />
            <StarCount />
            <StarCount />
            <StarCount />
            <StarCount />
          </Grid>
          <Grid
            item
            container
          >
            <DescriptionRating />
            <DescriptionRating />
            <DescriptionRating />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Ratings;