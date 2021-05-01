import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from './ImageGallery.jsx';
import poochy from '../poochy.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxSizing: 'border-box'
  },
  media: {
    paddingTop: '100%',
  },
  carousel: {
    width: '100%',
    margin: '0',
  },
  paper: {
    position: 'absolute',
    height: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid',
    borderColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[5],
    outline: 0,
  },
}));




const ProductImages = ({ images, initial, track }) => {
  const [selected, setSelected] = useState(initial);
  const classes = useStyles();

  function handleImgChange(clicked) {
    setSelected(clicked);
  }

  return (
    <Grid container direction='row' alignitems='flex-right'>
      <Grid item xs={2} sm={1}>
        <ImageGallery
          images={images}
          handleImgChange={handleImgChange}
          selected={selected}
          track={track}
        />
      </Grid>
      <Grid item xs={10} sm={11}>
        <Carousel
          className={classes.carousel}
          animation='slide'
          autoPlay={false}
          indicators={false}
          index={selected}
          onChange={(now, previous, e) => {
            setSelected(now);
            // track(e, 'Carousel Change');
          }}
        >
          {images.photos.map((photo, idx) => {
            return (
              <Photo key={idx} item={photo} track={track} />
            )
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

const Photo = ({ item, idx, track }) => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    track(e, 'Main Image');
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div
      id='expanded-image-title'
      style={modalStyle}
      className={classes.paper}
    >
      <img alt={item.url} src={item.url} height='100%' />
    </div>
  );

  return (
    <Card
      className={classes.root}
      variant='outlined'
    >
      {!item.url ?
        <CardMedia
          alt={idx}
          className={classes.media}
          image={poochy}
          title={idx}
          onClick={handleOpen}
        /> :
        <div>
          <CardMedia
            alt={idx}
            className={classes.media}
            image={item.url}
            title={idx}
            onClick={handleOpen}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='expanded-image-title'
            aria-describedby='expanded-image-description'
            image={item.url}
          >
            {body}
          </Modal>
        </div>
      }
    </Card>
  )
}

export default ProductImages;