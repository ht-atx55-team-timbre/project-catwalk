import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarComponent = (props) => {
  return (
    <Rating
      value={4.5}
      precision={0.25}
      readOnly
    />
  )
}

export default StarComponent;