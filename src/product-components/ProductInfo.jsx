import React from 'react';
import { Grid, Paper } from '@material-ui/core';


const ProductInfo = ({ product }) => (
    <Paper elevation={0}>
      <Grid item xs={12} className="category">{product.category}</Grid>
      <Grid item xs={12} className="product-name">{product.name}</Grid>
      <Grid item xs={12} className="price">{product.default_price}</Grid>
    </Paper>
  )

export default ProductInfo;