import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import AverageRating from './AverageRating';
import StarCount from './StarCount';
import DescriptionRating from './DescriptionRating';
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

  const classes = useStyles();

  const averageRating = Math.round(totalRating / numberOfRating * 10) /10

  return (
    <Grid
      item
      xs={12}
      sm={4}
    >
      <Paper
        className={classes.paper}
      >
        <Grid
          item
          container
          spacing={2}
        >
          <AverageRating
            averageRating={averageRating}
            recommended={recommended}
          />
          <Grid
            item
            container
          >
            {stars.map((star) =>
              <StarCount
                key={star}
                star={star}
                numberOfRating={numberOfRating}
                count={ratings[star] ? ratings[star] : 0}
              />
            )}
          </Grid>
          <Grid
            item
            container
          >
            { Object.keys(characteristics).map((key) => {
              const {id, value} = characteristics[key]
              return (
                <DescriptionRating
                  character={key}
                  value={Number(value)}
                  key={id}
                />
              )
            })}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Ratings;