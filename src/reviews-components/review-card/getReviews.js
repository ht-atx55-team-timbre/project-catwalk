import axios from 'axios';
import API_KEY from '../../config.js';

const getReviews = (product_id, count, sort) => {
  return  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
      headers: {
        Authorization: API_KEY
      },
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