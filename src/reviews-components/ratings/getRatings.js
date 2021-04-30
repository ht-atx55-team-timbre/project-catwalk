import axios from 'axios';

const getRatings = (product_id) => {
  return axios.get(`/meta`, {
    baseURL: 'http://127.0.0.1:3004/reviews',
    params: {
      product_id: product_id
    }
  })
    .then(res => {
      return res.data.ratings;
    })
}

export default getRatings;