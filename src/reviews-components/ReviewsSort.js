import React from 'react';
import { Grid, Paper, Typography, Select, MenuItem } from '@material-ui/core';

const ReviewsSort = ({ totalReviews, sort, handleSortChange, classes }) => {
  return (
    <Grid item>
    <Paper className={classes.paper}>
      <Typography variant="subtitle2">
        {totalReviews} reviews, sort by {
          <Select
            value={sort}
            onChange={handleSortChange}
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
  )
}

export default ReviewsSort;