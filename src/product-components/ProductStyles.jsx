import React from 'react';
import { Grid, Paper } from '@material-ui/core';


const ProductStyles = ({ styles }) => {
  return (
  <Grid className="styles">
    {styles.map((style, index) => (
      <Grid item key={index}>
        {style.name}
      </Grid>
    ))}
  </Grid>
  )
};

export default ProductStyles;