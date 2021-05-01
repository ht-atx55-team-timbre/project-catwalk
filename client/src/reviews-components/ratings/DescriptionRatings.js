import React from 'react';
import { Grid } from '@material-ui/core';

import DescriptionRating from './DescriptionRating';

const DescriptionRatings =({ characteristics }) => {
  return (
    <Grid item container>
      { Object.keys(characteristics).map((key) => {
        const {id, value} = characteristics[key]
        return (
          <DescriptionRating
            character={key}
            value={Number(value)}
            key={id}
          />
        )
      })}
    </Grid>
  )
}

export default DescriptionRatings;