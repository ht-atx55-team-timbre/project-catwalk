import React from 'react';
import { Card, CardMedia, Paper, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // boxSizing: 'border-box',
    // minWidth: '50px',
    width: '100%',
  },
  image: {
    position: 'relative',
    width: '50px',
    height: '50px',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
  },
  imageSelected: {
    position: 'relative',
    width: '40px',
    height: '40px',
    '&$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    // width: '50px',
    // height: '50px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }
}));

export default function StyleGallery({ images }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.photos.map((image, idx) => (
        <ButtonBase
          focusRipple
          key={image.name}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '100%',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.thumbnail_url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} id={idx}>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}