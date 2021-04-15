import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slider from '@material-ui/core/Slider';


const Ratings = (props) => {

  return (
    <Grid item container
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item container alignItems="center" style={{ border: '4px solid orange' }}>
        <Grid item xs={3}>
          <Typography variant="h3">4.5</Typography>
        </Grid>
        <Grid item xs={9}>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        </Grid>
      </Grid>

      <Grid item style={{ border: '4px solid orange' }}>
        <Typography variant="subtitle2" gutterBottom>
          100% of reviews recommend this Product
        </Typography>
      </Grid>

      <Grid item container direction="row" alignItems="baseline" style={{ border: '4px solid orange' }}>
        <Grid item xs={3}>
          <Typography variant="subtitle2">5 stars</Typography>
        </Grid>
        <Grid item container xs={9}>
          <LinearProgress variant="determinate" value={46} style={{ width: '100%', height:'8px'}}/>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">4 stars</Typography>
        </Grid>
        <Grid item container xs={9}>
          <LinearProgress variant="determinate" value={13} style={{ width: '100%', height:'8px'}}/>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">3 stars</Typography>
        </Grid>
        <Grid item container xs={9}>
          <LinearProgress variant="determinate" value={45} style={{ width: '100%', height:'8px'}}/>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">2 stars</Typography>
        </Grid>
        <Grid item container xs={9}>
          <LinearProgress variant="determinate" value={72} style={{ width: '100%', height:'8px'}}/>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">1 stars</Typography>
        </Grid>
        <Grid item container xs={9}>
          <LinearProgress variant="determinate" value={12} style={{ width: '100%', height:'8px'}}/>
        </Grid>
      </Grid>

      <Grid item container direction="row" alignItems="baseline" style={{ border: '4px solid orange' }}>
        <Typography id="discrete-slider" gutterBottom>
          Size
        </Typography>
        <Slider
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
        <Typography id="discrete-slider" gutterBottom>
          Comfort
        </Typography>
        <Slider
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
      </Grid>

    </Grid>
  )
}
export default Ratings;