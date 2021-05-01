import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const FormRecommend = ({ recommend, setRecommend }) => {


  return (
    <Grid item container xs={8}>
    <Grid item xs={12}>
      <Typography>Do you recommend this product?</Typography>
    </Grid>
    <Grid item xs={12}>
      <RadioGroup row aria-label="recommend" name="recommend" value={String(recommend)} onChange={e => {setRecommend(e.target.value === 'true' ? true : false)}}>
        <FormControlLabel value="true" control={<Radio color="primary"/>} label="Yes" />
        <FormControlLabel value="false" control={<Radio color="primary"/>} label="No" />
      </RadioGroup>
    </Grid>
  </Grid>
  )
}

export default FormRecommend;