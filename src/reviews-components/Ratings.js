import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import axios from 'axios';

import AverageRating from './ratings/AverageRating';
import StarCounts from './ratings/StarCounts';
import DescriptionRatings from './ratings/DescriptionRatings';
import getRatings from './ratings/getRatings';
import getCharacteristics from './getCharacteristics';
import getRating from './ratings/getRating';
import API_KEY from '../config.js';

const Ratings = ({ product_id,addReview }) => {
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
  }, [product_id, addReview])

  const stars = ['5', '4', '3', '2', '1'];
  let [average, numberOfRating] = getRating(ratings);

  return (
    <Grid item xs={12} sm={3}>
      <Paper style={{textAlign:"center"}}>
        <Grid item container >
          <AverageRating
            averageRating={average}
            recommended={recommended}
          />
          {Object.keys(ratings).length !== 0 && <StarCounts
            stars={stars}
            numberOfRating={numberOfRating}
            ratings={ratings}
          />}
          {Object.keys(characteristics).length !== 0 && <DescriptionRatings
            characteristics={characteristics}
          />}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Ratings;