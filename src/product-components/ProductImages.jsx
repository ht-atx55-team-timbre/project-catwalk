import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { sizing } from '@material-ui/system';

const ProductImages = ({ images }) => {
  return (
    // <div className="primary-image">
    //   <img src={images[0].photos[0].url} alt="main" />
    // </div>
    <Carousel animation="fade" autoPlay={false}>
      {
        images[0].photos.map((photo, index) => {
          return (
            <Photo key={index} item={photo} />
          )
        })
      }
    </Carousel>
  );
}

const Photo = ({ item, idx }) => {
  return (
    <Paper elevation={3}>
      <img src={item.url} alt={idx} />
    </Paper>
  )
}

export default ProductImages;