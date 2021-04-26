import React from 'react';
import { Grid,Button } from '@material-ui/core';

const FormUpload = ({ handleChange }) => {
  return (
    <Grid item xs={12}>
      <Button
        variant="contained"
        component="label"
      >
        Upload Image
        <input
          name="files"
          type="file"
          hidden
          onChange={handleChange}
        />
      </Button>
    </Grid>
  )
}

export default FormUpload;