import React from 'react';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardActions,
  CardContent,
  Typography,
  ButtonBase,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // boxSizing: 'border-box',
    // minWidth: 300,
    width: '100%',
    fontSize: 12
  },
  image: {
    position: 'relative',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    '&:hover, &$focusVisible': {
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
    width: '40px',
    height: '40px',
    borderRadius: '50%',
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
  },

}));

export default function ProductStyles({ styles }) {
  console.log('styles', styles);
  const [selected, setSelected] = useState(styles[0]);
  const classes = useStyles();

  function handleSelection(e) {
    console.log(e.target);
  }

  return (
    <div className={classes.root}>
      <CardContent>
        <Typography className={classes.root}>
          STYLE > {selected.name}
        </Typography>

        {styles.map((style, index) => (
          <ButtonBase
            focusRipple
            key={index}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: '50px',
              height: '50px'
            }}
            onClick={handleSelection}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${style.photos[0].thumbnail_url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span
              className={classes.imageButton}
              value={style.style_id}
            >
            </span>
          </ButtonBase>
        ))}
      </CardContent>
    </div>
  )
}