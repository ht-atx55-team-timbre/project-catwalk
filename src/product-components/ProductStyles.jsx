import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  Typography,
  ButtonBase
} from '@material-ui/core';
import theme from '../theme.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    fontSize: 12
  },
  image: {
    position: 'relative',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
    boxShadow: 'none'
  },
  imageSelected: {
    position: 'relative',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    '&$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
    },
    padding: '2px',
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
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
    width: '50px',
    height: '50px',
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

export default function ProductStyles({ styles, handleStyleChange }) {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    handleStyleChange(styles[selected], 0);
  }, [handleStyleChange, styles, selected]);

  function handleSelection(e) {
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === Number(e.target.id)) {
        setSelected(i);
        return;
      }
    }
  }

  return (
    <div className={classes.root}>
      <CardContent>
        <Typography className={classes.root}>
          STYLE > {styles[selected].name}
        </Typography>
        {styles.map((style, idx) => {
          if (idx === selected) {
            return (
              <ButtonBase
                focusRipple
                key={idx}
                className={classes.imageSelected}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '50px',
                  height: '50px',
                  marginTop: '4px',
                  marginBottom: '4px',
                  marginRight: '8px',
                  // border: '2px',
                  // borderColor: theme.palette.secondary.main
                }}
                onClick={handleSelection}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${style.photos[0].thumbnail_url})`,
                  }}
                />
                <span className={classes.imageBackdropSelected} />
                <span
                  className={classes.imageButton}
                  id={style.style_id}
                >
                </span>
              </ButtonBase>
            )
          } else {
            return (
              <ButtonBase
                focusRipple
                key={idx}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '50px',
                  height: '50px',
                  marginTop: '4px',
                  marginBottom: '4px',
                  marginRight: '8px',
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
                  id={style.style_id}
                >
                </span>
              </ButtonBase>
            )
          }
        })}
      </CardContent>
    </div >
  )
}