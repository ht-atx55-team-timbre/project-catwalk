import axios from 'axios';

const postForm = (data) => {
  return axios({
    method: 'POST',
    url: 'http://127.0.0.1:3004/reviews',
    data: data
  })
  .catch((err) => {
    console.log(err, 'can not send POST request');
  });
}

export default postForm;