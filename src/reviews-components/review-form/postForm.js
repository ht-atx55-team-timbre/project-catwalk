import API_KEY from '../../config.js';
import axios from 'axios';

const postForm = (data) => {
  return axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/`,
    headers: {
      Authorization: API_KEY
    },
    data: data
  })
  .catch((err) => {
    console.log(err, 'can not send POST request');
  });
}

export default postForm;