import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import StarComponent from '../reviews-components/StarComponent.js';
import ratingComponent from '../reviews-components/ratingComponent.js';


const ProductInfo = ({ product, id }) => {
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    ratingComponent(id)
      .then(result => {
        console.log('useEffect result', result)
        setRating(result[0]);
        setTotalReviews(result[1]);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <Paper elevation={0}>
      <StarComponent rating={rating}/>
      <Grid item xs={12} className="totalReviews">{totalReviews}</Grid>
      <Grid item xs={12} className="category">{product.category}</Grid>
      <Grid item xs={12} className="product-name">{product.name}</Grid>
      <Grid item xs={12} className="price">{product.default_price}</Grid>
    </Paper>
  )
}

export default ProductInfo;