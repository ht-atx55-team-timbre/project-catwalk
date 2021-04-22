import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import ReviewsSort from './ReviewsSort';
import ReviewCards from './ReviewCards';
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
  const [count, setCount] = useState(2)
  const [sort, setSort] = useState("relevant")
  const [results, setResults] = useState([])
  const [totalReviews, setTotalReviews] = useState(0)

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        product_id: product_id,
        count: count,
        sort: sort,
      }
    })
      .then (res => {
        setResults(res.data.results)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
  }, [product_id, count, sort])

  useEffect(() => {
    ratingComponent(product_id)
    .then(res => {
      setTotalReviews(res[1])
    })
    .catch((err) => {
      console.log(err, 'error getting reviews metadate for the product id');
    });
  }, [product_id])

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleCountChange = (e) => {
    setCount(count + 2);
  }


  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9}>
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={2}>
          <ReviewsSort
            totalReviews={totalReviews}
            sort={sort}
            handleSortChange={handleSortChange}
          />
          <ReviewCards results={results}/>
          <Grid item >
            <ButtonGroup color="primary">
              <Button
                onClick={handleCountChange}
                disabled={count >= totalReviews}
              >More Reviews</Button>
              <Button>Add Reviews +</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Reviews;