import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import API_KEY from '../config.js';
import axios from 'axios';

import QAComponent from './QAComponent.jsx';
import LoadMoreButton from './LoadMoreQs.jsx';
import AddQuestion from './AddQuestion.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  // componentDidMount() {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
  //     headers: {
  //       Authorization: API_KEY
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <p>QUESTIONS & ANSWERS</p>
        </Grid>
        <SearchBar
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        <Grid item>
          <QAComponent />
        </Grid>
        <Grid item>
          <LoadMoreButton />
          <AddQuestion />
        </Grid>
      </Grid>
    )
  }
}

export default QA;