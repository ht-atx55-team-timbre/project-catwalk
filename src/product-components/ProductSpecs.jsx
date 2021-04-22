import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
// import { CheckIcon } from '@material-ui/icons';


const ProductSpecs = ({ features }) => {
  return (
  <div className="specs">
    {features.map((feature, index) => (
      <Typography item key={index}>
         {feature.value} {feature.feature}
      </Typography>
    ))}
  </div>
  )
};

export default ProductSpecs;