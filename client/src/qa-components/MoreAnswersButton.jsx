import React from 'react';
import { Button, Box, Typography } from '@material-ui/core';

const MoreAnswersButton = ({ text, handleClick }) => {
  return (
    <Box pl={1.5}>
      <Button onClick={handleClick}>
        <Typography style={{fontSize: 12}}>{text}</Typography>
      </Button>
    </Box>
  )
}

export default MoreAnswersButton;