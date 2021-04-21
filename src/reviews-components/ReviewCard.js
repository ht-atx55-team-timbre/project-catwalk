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

const ReviewCard = ({ body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary }) => {

  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} variant="outlined">
        <CardInfo
          body={body}
          date={date}
          rating={rating}
          reviewer_name={reviewer_name}
          summary={summary}
        />
        <CardActions>
          <Typography>
            Helpful?
          </Typography>
          <ButtonGroup variant="text" color="primary">
            <Button>Yes ({helpfulness})</Button>
            <Button>Report</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ReviewCard;