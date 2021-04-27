import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import getReviews from './review-card/getReviews'
import ReviewsSort from './ReviewsSort';
import ReviewCards from './ReviewCards';
import ratingComponent from './ratingComponent';
import ReviewSubmit from './ReviewSubmit';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const Reviews = ({ product_id, name }) => {
  const [count, setCount] = useState(2)
  const [sort, setSort] = useState("relevant")
  const [results, setResults] = useState([])
  const [totalReviews, setTotalReviews] = useState(0)
  const [addReview, setAddReview] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  useEffect(() => {
    getReviews(product_id, count, sort)
      .then (res => {
        if (res) {
          setResults(res.data.results)
        } else {
          setResults([])
        }

      })
  }, [product_id, count, sort, addReview])

  useEffect(() => {
    ratingComponent(product_id)
    .then(res => {
      if (res) {
        setTotalReviews(res[1])
      } else {
        setTotalReviews(0)
      }
    })
  }, [product_id])

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9}>
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={2}>
          <ReviewsSort
            totalReviews={totalReviews}
            sort={sort}
            handleSortChange={handleSortChange}
            classes={classes}
          />
          <ReviewCards results={results}/>
          <Grid item >
            <ButtonGroup color="primary">
              <Button onClick={e => setCount(count + 2)}>More Reviews</Button>
              {!addReview && <Button color="primary" onClick={e => setOpen(true)}>Add Reviews +</Button>}
              <ReviewSubmit name={name} product_id={product_id} setAddReview={setAddReview} open={open} setOpen={setOpen}/>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Reviews;