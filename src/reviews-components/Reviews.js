import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ReviewCard from './ReviewCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));

const Reviews = (props) => {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8}>
      <Paper className={classes.paper}>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">
              248 reviews, sort by relevence
            </Typography>
          </Paper>
        </Grid>

        <ReviewCard />
        <ReviewCard />

        <Grid item >
          <ButtonGroup color="primary">
            <Button>More Reviews</Button>
            <Button>Add Reviews +</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
  )
}

export default Reviews;