import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

const MoreQuestionsButton = ({ text, handleClick }) => {
  return (
  <Box mt={2} mr={2} mb={2}>
    <Button
      variant="outlined"
      style={{borderRadius: 0, borderColor: "red"}}
      onClick={handleClick}
    >
      <Typography style={{fontSize: 14}}>{text}</Typography>
    </Button>
  </Box>
  )
}

export default MoreQuestionsButton;