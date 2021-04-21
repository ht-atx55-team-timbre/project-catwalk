import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import AverageRating from './AverageRating';
import StarCounts from './StarCounts';
import DescriptionRatings from './DescriptionRatings';
import API_KEY from '../config.js';

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

const getRating = (ratings) => {
  let totalRating = 0;
  let numberOfRating = 0;
  for (const key in ratings) {
    totalRating += key * Number(ratings[key]);
    numberOfRating += Number(ratings[key]);
  }
  return [totalRating, numberOfRating];
}

const Ratings = ({ product_id }) => {

  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        product_id: product_id,
      }
    })
      .then(res => {
        const { characteristics, ratings, recommended} = res.data;
        setCharacteristics(characteristics);
        setRatings(ratings);
        setRecommended(recommended);
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
  }, [product_id])

  const stars = ['5', '4', '3', '2', '1'];
  let [totalRating, numberOfRating] = getRating(ratings);
  const averageRating = Math.round(totalRating / numberOfRating * 10) /10

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Paper className={classes.paper}>
        <Grid item container spacing={2}>
          <AverageRating
            averageRating={averageRating}
            recommended={recommended}
          />
          <StarCounts
            stars={stars}
            numberOfRating={numberOfRating}
            ratings={ratings}
          />
          <DescriptionRatings
            characteristics={characteristics}
          />
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Ratings;