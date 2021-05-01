import axios from 'axios';

const getCharacteristics = (product_id) => {
  return axios.get(`/meta`, {
    baseURL: 'http://127.0.0.1:3004/reviews',
    params: {
      product_id: product_id
    }
  })
    .then(res => {
      return res.data.characteristics;
    })
    .catch((err) => {
      console.log(err, 'error getting reviews characteristics for the product id');
    });
}

export default getCharacteristics;