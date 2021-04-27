import axios from 'axios';
import API_KEY from '../../config.js';

const getRatings = (product_id) => {
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta', {
    headers: {
      Authorization: API_KEY
    },
    params: {
      product_id: product_id,
    }
  })
    .then(res => {
      return res.data.ratings;
    })
}

export default getRatings;