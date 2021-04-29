import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ButtonBase
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    float: 'right',
    flexWrap: 'wrap',
    overflow: 'auto',
    width: '100%',
    height: '100%'
  },
  rootFewerImages: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    width: '100%',
    // height: '100%'
  },
  image: {
    position: 'relative',
    // borderRadius: '5px',
    width: '95%',
    height: '16.6%',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
    // paddingLeft: '5px'
  },
  imageSelected: {
    position: 'relative',
    // borderRadius: '5px',
    width: '100%',
    height: '16.6%',
    '&$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
    paddingLeft: '3px',
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    borderRadius: '5px',
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
    // borderRadius: '5px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    // borderRadius: '5px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageBackdropSelected: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  }
}));

export default function ImageGallery({ images, handleImgChange, selected }) {
  const classes = useStyles();

  function handleClick(e) {
    handleImgChange(Number(e.target.id));
  }

  return (
    <div className={classes.root}>
      {images.photos.map((image, idx) => {
        if (idx === selected && image.thumbnail_url) {
          return (
            <ButtonBase
              focusRipple
              key={idx}
              className={classes.imageSelected}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: '100%',
                // padding: '1px',
                paddingLeft: '5px',
                borderLeft: '2px solid', // want to set this to theme highlight color
                borderColor: 'red',
              }}
              onClick={handleClick}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.thumbnail_url})`,
                }}
              />
              <span className={classes.imageBackdropSelected} />
              <span className={classes.imageButton} id={idx}>
              </span>
            </ButtonBase>
          );
        } else {
          return (
            <ButtonBase
              focusRipple
              key={idx}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: '100%',
              }}
              onClick={handleClick}
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
          );
        }
      })}
    </div>
  );
}
