import React from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    "& .MuiSlider-thumb": {
      backgroundColor: '#fff',
      borderRadius: '0',
      borderBottom: '10px solid #4E5255',
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '1px solid transparent',
      transform: 'rotate(180deg)',
      marginTop: -11,
    }
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    height: 10,
  },
  active: {},
  track: {
    height: 10,
    borderRadius:0,
  },
  mark: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
    height: 10,
    width: 4,
    borderRadius:0,
  },
  rail: {
    height: 10,
    color: '#4E5255',
    borderRadius:0,
  },
})(Slider);

const DescriptionRating =({ character, value }) => {

  const classes = useStyles();
  return (
    <Grid item container>
      <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {character}
      </Typography>
      <PrettoSlider
        defaultValue={value}
        step={1}
        marks
        min={0}
        max={5}
        disabled
      />
      </div>
    </Grid>
  )
}

export default DescriptionRating;