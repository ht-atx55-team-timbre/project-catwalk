import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { Card, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardInfo from './CardInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
}));

const ReviewCard = (porps) => {

  const classes = useStyles();

  return (
    <Grid
      item
    >
      <Card
        className={classes.root}
        variant="outlined"
      >
        <CardInfo />
        <CardActions>
          <Typography>
            Helpful?
          </Typography>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button>Yes(9)</Button>
            <Button>Report</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ReviewCard;