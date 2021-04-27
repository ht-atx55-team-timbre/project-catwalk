import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const CardResponse = ({ response }) => {

  const classes = useStyles();

  return (
    <Grid item container direction="column">
      <Paper className={classes.paper}>
        <Typography variant="body2" component="p" gutterBottom>
          Response from seller:
        </Typography>
        <Typography variant="body2" component="p">
          {response}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default CardResponse;