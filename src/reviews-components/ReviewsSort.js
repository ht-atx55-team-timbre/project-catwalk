import React from 'react';
import { Grid, Typography, Select, MenuItem } from '@material-ui/core';

const ReviewsSort = ({ totalReviews, sort, handleSortChange }) => {
  return (
    <Grid item>
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
            </Select>
          }
        </Typography>
    </Grid>
  )
}

export default ReviewsSort;