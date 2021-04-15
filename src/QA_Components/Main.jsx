import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

import QAComponent from './QAComponent.jsx';
import LoadMoreButton from './LoadMoreQs.jsx';
import AddQuestion from './AddQuestion.jsx';

class QA extends React.Component {
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