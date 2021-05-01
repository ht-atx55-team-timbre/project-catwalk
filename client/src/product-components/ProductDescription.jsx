import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: '100%',
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

  return (
    <Paper elevation={0} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">{product.slogan}</Typography>
        <Typography variant="body2" component="p">{product.description}</Typography>
      </CardContent>
    </Paper>
  )
};

export default ProductDescription;