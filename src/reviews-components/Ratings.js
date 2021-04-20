import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AverageRating from './AverageRating';
import StarCount from './StarCount';
import DescriptionRating from './DescriptionRating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const getRating = (ratings) => {
  let totalRating = 0;
  let numberOfRating = 0;
  for (const key in ratings) {
    totalRating += key * Number(ratings[key]);
    numberOfRating += Number(ratings[key]);
  }
  return [totalRating, numberOfRating];
}

const Ratings = ({ reviewMetadata }) => {
  const stars = ['5', '4', '3', '2', '1'];
  const { characteristics, ratings, recommended} = reviewMetadata;
  let [totalRating, numberOfRating] = getRating(ratings);

  const classes = useStyles();

  const averageRating = Math.round(totalRating / numberOfRating * 10) /10

  if (characteristics && ratings && recommended) {
    return (
      <Grid
        item
        xs={12}
        sm={4}
      >
        <Paper
          className={classes.paper}
        >
          <Grid
            item
            container
            spacing={2}
          >
            <AverageRating
              averageRating={averageRating}
              recommended={recommended}
            />
            <Grid
              item
              container
            >
              {stars.map((star) =>
                <StarCount
                  key={star}
                  star={star}
                  numberOfRating={numberOfRating}
                  count={ratings[star] ? Number(ratings[star]) : 0}
                />
              )}
            </Grid>
            <Grid
              item
              container
            >
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
          </Grid>
        </Paper>
      </Grid>
    )
  } else {
    return <></>;
  }
}

export default Ratings;