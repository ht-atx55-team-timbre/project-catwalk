import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
// import { sizing } from '@material-ui/system';

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
  return (
    <Carousel animation="fade" autoPlay={false}>
      {images[0].photos.map((photo, index) => {
        return (
          <Photo key={index} item={photo} />
        )
      })}
    </Carousel>
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
        // component="img"
        alt={idx}
        // padding-top="100%"
        className={classes.media}
        image={item.url}
        title={idx}
      />
    </Card>
  )
}


export default ProductImages;

    // <div className="primary-image">
    //   <img src={images[0].photos[0].url} alt="main" />
    // </div>