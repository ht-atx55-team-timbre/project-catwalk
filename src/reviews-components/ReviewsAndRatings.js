import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Ratings from './Ratings';

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

const ReviewsAndRatings = (props) => {
  const classes = useStyles();

  return (
  <Grid container spacing={3} >
    <Grid item xs={12}>
    <Typography variant="h6" gutterBottom>
      RATINGS & REVIEWS
    </Typography>
    </Grid>
    <Grid item xs={3} style={{ border: '4px solid red' }}>
      <Ratings />
    </Grid>
    <Grid item xs={7}>
      <Paper className={classes.paper}>xs=7</Paper>
    </Grid>
  </Grid>
  )
}

export default ReviewsAndRatings;