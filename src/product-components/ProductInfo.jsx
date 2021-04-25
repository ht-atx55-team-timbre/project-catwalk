import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
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
  discount: {
    marginBottom: 12,
    color: 'red'
  }
});

const ProductInfo = ({ product, id, style }) => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    ratingComponent(id)
      .then(result => {
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
          <Typography className={classes.minimal}>Read all {totalReviews} reviews</Typography>
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {product.category}
        </Typography>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        {style.sale_price ?
          <div>
            <Typography className={classes.discount}>
              <strike>{style.original_price}</strike>
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {style.sale_price} <em>on sale!</em>
            </Typography>
          </div> :
          <div>
            <Typography className={classes.pos} color="textSecondary">
              {style.original_price}
            </Typography>
          </div>
        }
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Paper>
  )
}

export default ProductInfo;