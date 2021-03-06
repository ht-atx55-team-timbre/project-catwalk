import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardContent,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import StarComponent from '../reviews-components/StarComponent.js';
import ratingComponent from '../reviews-components/ratingComponent.js';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    display: 'inline-block'
  },
  minimal: {
    display: 'flex',
    fontSize: 11,
    marginBottom: 12
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

const ProductInfo = ({ product, id, style, track }) => {
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
  }, [id, totalReviews]);

  return (
    <Paper elevation={0} className={classes.root}>
      <CardContent>
        {!totalReviews ?
          <div></div> :
          <div>
            <StarComponent rating={rating} />
            <Typography className={classes.minimal} alignitems='center'>
              <a href='#reviews-ratings' onClick={(e) => { track(e, 'Navigate to Reviews from Product Info'); }}>Read all {totalReviews} reviews</a>
            </Typography>
          </div>
        }
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {product.category}
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {product.name}
        </Typography>
        {style.sale_price ?
          <Grid container direction='row'>
            <Typography className={classes.pos} color='textSecondary'>
              <strike>{style.original_price}</strike>
            </Typography>
            <Typography className={classes.discount}>
              &emsp;{style.sale_price} <em>on sale!</em>
            </Typography>
          </Grid> :
          <div height='33%'>
            <Typography className={classes.pos} color='textSecondary'>
              {style.original_price}
            </Typography>
          </div>
        }
        <Typography variant='body1' style={{ fontSize: 14 }}>
          Share This Item On Social
        </Typography>
        <div display='inline' alignitems='left'>
          <IconButton
            onClick={(e) => { track(e, 'Facebook Icon'); }}
          >
            <FacebookIcon color='primary' />
          </IconButton>
          <IconButton
            onClick={(e) => { track(e, 'Twitter Icon'); }}
          >
            <TwitterIcon color='primary' />
          </IconButton>
          <IconButton
            onClick={(e) => { track(e, 'Pinterest Icon'); }}
          >
            <PinterestIcon color='primary' />
          </IconButton>
        </div>
      </CardContent>
    </Paper>
  )
}

export default ProductInfo;