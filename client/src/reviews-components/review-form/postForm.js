import axios from 'axios';

const postForm = (data) => {
  return axios({
    method: 'POST',
    url: '/reviews',
    data: data
  })
  .catch((err) => {
    console.log(err, 'can not send POST request');
  });
}

export default postForm;