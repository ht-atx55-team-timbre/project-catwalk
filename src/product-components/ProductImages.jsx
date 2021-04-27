import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from './ImageGallery.jsx';
import poochy from '../poochy.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    boxSizing: 'border-box'
  },
  media: {
    paddingTop: '100%',
  },
});


const ProductImages = ({ images, initial }) => {
  const [selected, setSelected] = useState(initial);

  function handleImgChange(clicked) {
    setSelected(clicked);
  }

  return (
    <Grid container direction='row'>
      <Grid item xs={2} sm={1}>
        <ImageGallery
          images={images}
          handleImgChange={handleImgChange}
          selected={selected}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <Carousel
          animation='slide'
          autoPlay={false}
          indicators={false}
          index={selected}
          onChange={(now, previous) => {
            setSelected(now);
          }}
        >
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
      variant='outlined'
    >
      {item.url === null ?
        <CardMedia
          alt={idx}
          className={classes.media}
          image={poochy}
          title={idx}
        /> :
        <CardMedia
          alt={idx}
          className={classes.media}
          image={item.url}
          title={idx}
        />
      }
    </Card>
  )
}

export default ProductImages;