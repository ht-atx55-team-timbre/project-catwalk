import axios from 'axios';

const getReviews = (product_id, count, sort) => {
  return  axios.get('http://127.0.0.1:3004/reviews', {
      params: {
        product_id: product_id,
        count: count,
        sort: sort,
      }
    })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
}

export default getReviews;