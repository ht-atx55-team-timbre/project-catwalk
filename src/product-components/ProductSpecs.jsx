import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  Typography,
} from '@material-ui/core';
// import { CheckIcon } from '@material-ui/icons';


const ProductSpecs = ({ features }) => {
  return (
    <div className="specs">
      <CardContent>
        {features.map((feature, index) => (
          <Typography key={index}>
            {feature.value} {feature.feature}
          </Typography>
        ))}
      </CardContent>
    </div>
  )
};

export default ProductSpecs;