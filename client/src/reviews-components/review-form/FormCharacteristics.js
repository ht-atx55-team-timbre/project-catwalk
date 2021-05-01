import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormCharacteristics = ({ characteristics, handleChange }) => {
  return (
    <Grid item container direction="row" xs={12}>
    <Grid item xs={12}>
      <Typography>Characteristics</Typography>
    </Grid>
    { Object.keys(characteristics).map((key) => {
      return (
      <Grid item key={key}>
        <Typography>{key}</Typography>
        <RadioGroup row aria-label={key} name={key} value={ characteristics[key].value } onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio color="primary"/>} label="Poor" />
          <FormControlLabel value="2" control={<Radio color="primary"/>} label="Fair" />
          <FormControlLabel value="3" control={<Radio color="primary"/>} label="Average" />
          <FormControlLabel value="4" control={<Radio color="primary"/>} label="Good" />
          <FormControlLabel value="5" control={<Radio color="primary"/>} label="Great" />
        </RadioGroup>
      </Grid>
      )
    })}
  </Grid>

  )
}

export default FormCharacteristics;