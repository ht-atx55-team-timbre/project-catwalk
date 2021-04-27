import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import AverageRating from './ratings/AverageRating';
import StarCounts from './ratings/StarCounts';
import DescriptionRatings from './ratings/DescriptionRatings';
import getRatings from './ratings/getRatings';
import getCharacteristics from './getCharacteristics';
import getRating from './ratings/getRating';
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
        console.log(res.data.recommended)
        setRecommended(res.data.recommended);
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
    getRatings(product_id)
      .then(ratings => {
        setRatings(ratings)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews ratings for the product id');
      });
    getCharacteristics(product_id)
      .then(characteristics => {
        if (characteristics) {
          setCharacteristics(characteristics)
        } else {
          setCharacteristics({})
        }
      })
      .catch((err) => {
        console.log(err, 'error getting reviews characteristics for the product id');
      });
  }, [product_id])

  const stars = ['5', '4', '3', '2', '1'];
  let [average, numberOfRating] = getRating(ratings);

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3}>
      <Paper className={classes.paper}>
        <Grid item container spacing={2}>
          <AverageRating
            averageRating={average}
            recommended={recommended}
          />
          <StarCounts
            stars={stars}
            numberOfRating={numberOfRating}
            ratings={ratings}
          />
          {Object.keys(characteristics).length !== 0 && <DescriptionRatings
            characteristics={characteristics}
          />}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Ratings;