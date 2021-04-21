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

const CardInfo = (props) => {

  const classes = useStyles();

  return (
    <CardContent>
      <Grid container justify="space-between">
        <Grid item>
          <StarComponent />
        </Grid>
        <Grid item>
          <Typography className={classes.pos} color="textSecondary">
            September 14, 2016
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" justify="flex-start" spacing={2}>
        <Grid item>
          <Typography variant="h5" component="h2">
            dkaj nfljkdlioui ouiou iodfs fsdfsd
            fs dfsdfs dfsdfd suiouoiuo iuiuouals
          </Typography>
        </Grid>
        <Grid item >
          <Typography variant="body2" component="p">
            well meaning and kindly. well meaning and kindly. well meaning and kindly. well meaning and kindly. well meaning and kindly. well meaning and kindly. well meaning and kindly.
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default CardInfo;
