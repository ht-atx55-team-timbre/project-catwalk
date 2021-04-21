import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Select, MenuItem } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import ReviewCard from './ReviewCard';
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

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        sort: sort,
        product_id: product_id
      }
    })
      .then (res => {
        setResults(res.data.results)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
  }, [product_id, sort, count])

  const handleChange = (event) => {
    setSort(event.target.value);
  };


  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8}>
      <Paper className={classes.paper}>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">
              {results.length} reviews, sort by {
                <Select
                  value={sort}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="relevant">relevant</MenuItem>
                  <MenuItem value="newest">newest</MenuItem>
                  <MenuItem value="helpful">helpful</MenuItem>
                </Select>}
            </Typography>
          </Paper>
        </Grid>

        <ReviewCard />
        <ReviewCard />

        <Grid item >
          <ButtonGroup color="primary">
            <Button>More Reviews</Button>
            <Button>Add Reviews +</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
  )
}

export default Reviews;