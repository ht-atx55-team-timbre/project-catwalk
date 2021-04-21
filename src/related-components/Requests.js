import axios from 'axios';
import API_KEY from '../config';

export default axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products',
  headers: {
    Authorization: API_KEY
  }
});