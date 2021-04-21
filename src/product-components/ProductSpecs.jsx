import React from 'react';
import { Grid } from '@material-ui/core';


const ProductSpecs = ({ features }) => {
  return (
  <div className="specs">
    {features.map((feature, index) => (
      <Grid item key={index}>
        {feature.feature}: {feature.value}
      </Grid>
    ))}
  </div>
  )
};

export default ProductSpecs;