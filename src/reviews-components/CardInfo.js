import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import moment from 'moment';

import StarComponent from './StarComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const CardInfo = ({ body, date, rating, reviewer_name, summary,recommend,response }) => {

  const classes = useStyles();

  return (
    <CardContent>
      <Grid container justify="space-between">
        <Grid item>
          <StarComponent rating={rating}/>
        </Grid>
        <Grid item>
          <Typography className={classes.pos} color="textSecondary">
            {`${reviewer_name}, ${moment(date).format('MMMM Do, YYYY')}`}
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
        {recommend &&
          <Grid item container alignItems="center" spacing={2}>
            <CheckCircleIcon style={{ fontSize: 20}} />
            <Grid item>
              <Typography variant="body2" component="p">
                I recommend this product
              </Typography>
            </Grid>
          </Grid>
        }
        {response &&
          <Grid item >
            <Paper className={classes.paper}>
              <Typography variant="body2" component="p" gutterBottom>
                Response from seller:
              </Typography>
              <Typography variant="body2" component="p">
                {response}
              </Typography>
            </Paper>
          </Grid>
        }
      </Grid>
    </CardContent>
  )
}

export default CardInfo;
