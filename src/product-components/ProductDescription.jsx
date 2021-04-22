import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
import StarComponent from '../reviews-components/StarComponent.js';
import ratingComponent from '../reviews-components/ratingComponent.js';

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  minimal: {
    display: "inline-block",
    fontSize: 11
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProductDescription = ({ product }) => {
  const classes = useStyles();

  return(
    <Paper elevation={0} className="description">
      <Typography variant="h5" component="h2">{product.slogan}</Typography>
      <Typography variant="body2" component="p">{product.description}</Typography>
    </Paper>
  )
};

export default ProductDescription;