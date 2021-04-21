import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import StarComponent from './StarComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
}));

const CardInfo = ({ body, date, rating, reviewer_name, summary }) => {

  const classes = useStyles();

  return (
    <CardContent>
      <Grid container justify="space-between">
        <Grid item>
          <StarComponent rating={rating}/>
        </Grid>
        <Grid item>
          <Typography className={classes.pos} color="textSecondary">
            {`${reviewer_name}, ${date}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" justify="flex-start" spacing={2}>
        <Grid item>
          <Typography variant="h5" component="h2">
            {summary}
          </Typography>
        </Grid>
        <Grid item >
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default CardInfo;
