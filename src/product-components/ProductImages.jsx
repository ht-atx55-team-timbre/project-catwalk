import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from './ImageGallery.jsx';

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
  const [display, setDisplay] = useState(0)

  // useEffect()

  function handleImgChange(display) {
    setDisplay(display);
  }

  return (
    <Grid container direction="row">
      <Grid item xs={2} sm={1}>
        <ImageGallery
          images={images}
          handleImgChange={handleImgChange}
          display={display}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <Carousel animation="slide" autoPlay={false} indicators={false} index={display}>
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