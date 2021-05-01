const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();

const PORT = 3004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/*', (req, res) => {
    axios.request({
      url: req.params[0],
      method: req.method,
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/',
      headers: {
        Authorization: process.env.API_KEY
      },
      data: req.body,
      params: req.query
    })
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      res.status(400);
    })
});

app.listen((process.env.PORT || PORT), () => {
  console.log(`Server listening on port ${PORT}`);
});
