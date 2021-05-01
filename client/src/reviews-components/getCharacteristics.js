import axios from 'axios';

const getCharacteristics = (product_id) => {
  return axios.get(`/meta`, {
    baseURL: '/reviews',
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