import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import ReviewsSort from './ReviewsSort';
import ReviewCard from './ReviewCard';
import ratingComponent from './ratingComponent';
import API_KEY from '../config.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));

const Reviews = ({ product_id }) => {
  const [count, setCount] = useState(1)
  const [sort, setSort] = useState("relevant")
  const [results, setResults] = useState([])
  const [totalReviews, setTotalReviews] = useState(0)

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        conut: count,
        sort: sort,
        product_id: product_id
      }
    })
      .then (res => {
        setResults(res.data.results)
        console.log(results)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
  }, [product_id, sort, count])

  useEffect(() => {
    ratingComponent(product_id)
    .then(res => {
      setTotalReviews(res[1])
    })
    .catch((err) => {
      console.log(err, 'error getting reviews metadate for the product id');
    });
  }, [product_id])

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleCountChange = (e) => {
    setCount(count + 2);
  }


  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8}>
      <Paper className={classes.paper}>

      <Grid container direction="column" spacing={2}>
        <ReviewsSort
          totalReviews={totalReviews}
          sort={sort}
          handleSortChange={handleSortChange}
          classes={classes}
        />

        <ReviewCard />
        <ReviewCard />

        <Grid item >
          <ButtonGroup color="primary">
            <Button onClick={handleCountChange}>More Reviews</Button>
            <Button>Add Reviews +</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
  )
}

export default Reviews;