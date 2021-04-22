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

const ProductInfo = ({ product, id }) => {
  const classes = useStyles();
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
    <Paper elevation={0} className={classes.root}>
      <CardContent>
        <div>
          <StarComponent rating={rating} display="inline-block" />
          <CardActions display="inline-block">
            <Typography className={classes.minimal}>Read all {totalReviews} reviews</Typography>
          </CardActions>
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {product.category}
        </Typography>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {product.default_price}
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Paper>
  )
}

export default ProductInfo;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
