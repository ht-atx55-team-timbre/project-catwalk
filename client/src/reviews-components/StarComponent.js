import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarComponent = ({ rating }) => {
  return (
    <Rating
      value={rating}
      precision={0.25}
      readOnly
    />
  )
}

export default StarComponent;