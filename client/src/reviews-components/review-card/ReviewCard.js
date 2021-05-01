import React from 'react';
import { Grid } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';

import CardInfo from './CardInfo';
import CardHeader from './CardHeader';
import CardResponse from './CardResponse';
import CardRecommend from './CardRecommend';
import CardAct from './CardAct'

const ReviewCard = ({ review }) => {
  const {body, date, helpfulness, photos, rating, recommend, response, review_id, reviewer_name, summary} = review;

  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardContent>
          <CardHeader
            date={date}
            rating={rating}
            reviewer_name={reviewer_name}
          />
          <CardInfo
            body={body}
            summary={summary}
            photos={photos}
          />
          <Grid container >
            {recommend && <CardRecommend />}
            {response && <CardResponse response={response} />}
          </Grid>
        </CardContent>
        <CardAct
          helpfulness={helpfulness}
          review_id={review_id}
        />
      </Card>
    </Grid>
  )
}

export default ReviewCard;