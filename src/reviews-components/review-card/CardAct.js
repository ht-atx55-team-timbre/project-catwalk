import React from 'react';
import { useState } from 'react';
import { CardActions } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import axios from 'axios';


const CardAct = ({ helpfulness, review_id, track }) => {
  const [select, setSelect] = useState(true)
  const [helpful, setHelpful] = useState(helpfulness)

  const handleHelpful = (e) => {
    track(e, 'helpful')
    setSelect(false);
    if (e.currentTarget.value === 'yes') {
      axios({
        method: 'PUT',
        url: `http://127.0.0.1:3004/reviews/${review_id}/helpful`,
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