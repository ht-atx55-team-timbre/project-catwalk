import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { Card, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import CardInfo from './CardInfo'
import API_KEY from '../config.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
}));

const ReviewCard = ({ body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary,review_id }) => {
  const [select, setSelect] = useState(true)
  const [helpful, setHelpful] = useState(helpfulness)

  const handleHelpful = (e) => {
    setSelect(false);
    if (e.currentTarget.value === 'yes') {
      axios({
        method: 'PUT',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/${review_id}/helpful`,
        headers: {
          Authorization: API_KEY
        },
        data: {
          helpfulness: helpful
        }
      })
      .then(res => {
        setHelpful(helpful + 1);
      })
      .catch((err) => {
        console.log(err, 'error getting helpfulness for the review id');
      });
    }
  }

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
          recommend={recommend}
          response={response}
        />
        <CardActions>
          <Typography>
            Was this review helpful?
          </Typography>
          <ButtonGroup variant="text" color="primary" disabled={!select}>
            <Button value="yes" onClick={handleHelpful}>Yes ({helpful})</Button>
            <Button value="no" onClick={handleHelpful}>No</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ReviewCard;