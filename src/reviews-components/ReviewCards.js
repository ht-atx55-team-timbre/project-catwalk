import React from 'react';

import ReviewCard from './ReviewCard';

const ReviewCards = ({results}) => {
  /**
    body: "I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all."
    date: "2019-01-01T00:00:00.000Z"
    helpfulness: 8
    photos: []
    rating: 5
    recommend: true
    response: ""
    review_id: 328556
    reviewer_name: "funtime"
    summary: "This product was great!"
   */

  return (
    <>
    {results.map(review => {
      console.log(review);
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
          key={review_id}
        />
      )
    })}
    </>
  )
}

export default ReviewCards;