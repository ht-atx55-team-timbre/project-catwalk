import React from 'react';

import ReviewCard from './ReviewCard';

const ReviewCards = ({results}) => {

  return (
    <>
    {results.map(review => {
      const {body, date, helpfulness, photos, rating, recommend, response, review_id, reviewer_name, summary} = review;
      return (
        <ReviewCard
          body={body}
          date={date}
          helpfulness={helpfulness}
          photos={photos}
          rating={rating}
          recommend={recommend}
          response={response}
          reviewer_name={reviewer_name}
          summary={summary}
          review_id={review_id}
          key={review_id}
        />
      )
    })}
    </>
  )
}

export default ReviewCards;