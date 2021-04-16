import React from 'react';
import { Grid } from '@material-ui/core';
import RelatedCard from './RelatedCard';

const Related = () => {
  return (
  <Grid container direction="column">
    <Grid item container direction="column">
      <h1>Related Products:</h1>
      <RelatedCard />
    </Grid>
    <Grid item container direction="column">
      <h1>Your Outfit:</h1>
      <RelatedCard />
    </Grid>
  </Grid>
  )
}

export default Related;