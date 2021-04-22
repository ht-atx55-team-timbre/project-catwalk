import React from 'react';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';

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

const ProductStyles = ({ styles }) => {
  return (
  <Paper className="root" elevation={0}>
    {styles.map((style, index) => (
      <Typography item key={index}>
        {style.name}
      </Typography>
    ))}
  </Paper>
  )
};

export default ProductStyles;