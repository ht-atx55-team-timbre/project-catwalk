import React from 'react';
import { useState } from 'react';
import { CardActions } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import axios from 'axios';

import API_KEY from '../../config.js';

const CardAct = ({ helpfulness, review_id }) => {
  const [select, setSelect] = useState(true)
  const [helpful, setHelpful] = useState(helpfulness)

  const handleHelpful = (e) => {
    setSelect(false);
    if (e.currentTarget.value === 'yes') {
      axios({
        method: 'PUT',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/${review_id}/helpful`,
        headers: {
          Authorization: API_KEY
        },
        data: {
          helpfulness: helpful
        }
      })
      .then(res => {
        setHelpful(helpful + 1);
      })
      .catch((err) => {
        console.log(err, 'error getting helpfulness for the review id');
      });
    }
  }

  return (
    <CardActions>
      <Typography>
        Was this review helpful?
      </Typography>
      <ButtonGroup variant="text" color="secondary" disabled={!select}>
        <Button value="yes" onClick={handleHelpful}>Yes ({helpful})</Button>
        <Button value="no" onClick={handleHelpful}>No</Button>
      </ButtonGroup>
    </CardActions>
  )
}

export default CardAct;