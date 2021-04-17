import React from 'react';
import { Grid } from '@material-ui/core';


const ProductStyles = ({ styles }) => {
  console.log(styles);

  return (
  <div className="styles">
    {styles.map((style, index) => (
      <Grid item key={index}>
        {style.name}
      </Grid>
    ))}
  </div>
  )
};

export default ProductStyles;