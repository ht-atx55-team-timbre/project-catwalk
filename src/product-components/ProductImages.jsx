import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyleGallery from './StyleGallery.jsx';

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxSizing: "border-box"
  },
  media: {
    // height: 0,
    paddingTop: "100%",
  },
});

const ProductImages = ({ images }) => {
  console.log('when does this re-render');
  const [display, setDisplay] = useState(images.photos[0])

  // useEffect()

  function handleImgChange() {
    console.log('clicked!');
  }

  return (
    <Grid container direction="row">
      <Grid item sm={2}>
        <StyleGallery images={images} handleImgChange={handleImgChange} />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Carousel animation="fade" autoPlay={false}>
          {images.photos.map((photo, idx) => {
            return (
              <Photo key={idx} item={photo} />
            )
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}

const Photo = ({ item, idx }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
    >
      <CardMedia
        alt={idx}
        className={classes.media}
        image={item.url}
        title={idx}
      />
    </Card>
  )
}


export default ProductImages;